const express = require("express");
body_parser = require("body-parser");
jsonfile = "/src/file.json";
const Promise = require("bluebird");
session = require("express-session");
(redis = require("redis")), (client = redis.createClient());
RedisStore = require("connect-redis")(session);
pbkdf2 = require("pbkdf2");
passhelper = require("pbkdf2-helpers");
crypto = require("crypto");

let db_create = require("./db_create");
let connection;

const db = require("./models"); //for use with sequelize

var app = express();

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static("dist"));

var hour = 3600000;
app.use(
  session({
    store: new RedisStore(),
    secret: process.env.SECRET_KEY || "dev",
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 24 * hour }
  })
);
const sharedsession = require("express-socket.io-session");

io.use(
  sharedsession(
    session({
      store: new RedisStore(),
      secret: process.env.SECRET_KEY || "dev",
      resave: true,
      saveUninitialized: false,
      cookie: { maxAge: 24 * hour }
    })
  )
);


// app.use(function(request, response, next) {
//   if (request.session.user) {
//     next();
//   } else if (request.path == "/login") {
//     next();
//   } else if (request.path == "/register") {
//     next();
//   } else {
//     response.redirect("/login");
//   }
// });
// =======================       ===================

app.get("/register", function(request, response) {
  response.render("register.html");
});

app.post("/register", function(request, response) {
  var username = request.body.username;
  var password = request.body.password;
  var password2 = request.body.password2;
  var passcrypt = passhelper.generate_storage(password);

  if (passhelper.matches(password2, passcrypt)) {
    console.log("Matching passwords!!");
    db.user
      .create({
        firstName: request.body.fname,
        lastName: request.body.lname,
        email: request.body.email,
        passcrypt: passcrypt
      })
      .then(user => {
        response.redirect("/login");
      });
    //pass info to db.
  } else {
    console.log("mismatch!!");
    response.redirect("/register");
  }
});

// ============================== ======================

app.get("/login", function(request, response) {
  response.render("login.html");
});

app.post("/login", function(request, response) {
  var username = request.body.username;
  var password = request.body.password;
  db.user.findOne({ where: { email: username } }).then(user => {
    if (
      username == user.email &&
      passhelper.matches(password, user.passcrypt)
    ) {
      request.session.user = username;
      console.log("Welcome!");
      response.render("index.html", { username });
    } else {
      console.log("failed!");
      response.redirect("/login");
    }
  });
});

app.get("/logout", function(request, response) {
  request.session.destroy();
  response.redirect("login.html");
});

// ======= APP START ==============

app.get("/", function(request, response) {
  db.customer
    .findAll({
      attrributes: [
        "first_name",
        "zip",
        "id_number",
        "occupation",
        "city",
        "address"
        // "task",
        // "carrier",
        // "policy"
      ],
      order: ["first_name", "city"]
    })
    .then(customers => {
      response.render("dist/index.html", { customers });
    });
});

app.post("/api/submit", function( request, response, next){
  let datas = request.body;
  console.dir("Data: "+ datas)
  
  response.render("/dist/index.html");
})


app.get("/quote", function(request, response) {
  response.render("quote_form.html");
});

app.get("/customer", function(request, response) {
  response.render("customer.html");
});

//#############################+++++++++++#################################

app.post("/success", function(request, response, next) {
  let customerData = request.body;
  console.dir(customerData);

  Promise.resolve(db_create.dataToTables(customerData))
    .then(result => {
      response.redirect("/");
    })
    .catch(next);
});

//################################----------###############################

app.get("/todos", function(request, response) {
  db.task.findAll({ include: [{ model: db.user }] }).then(tasks => {
    db.user.findAll({ offset: 1 }).then(users => {
      console.log(users.firstName);
      response.render("todos.html", { tasks, users });
    });
    // response.json({tasks: tasks})
  });
});

app.post("/todos", function(request, response, next) {
  console.log("DUE: " + request.body.date);
  var due_date = request.body.date + "T19:00:00";
  if (
    (request.body.n_task != "") &
    (request.body.agent != undefined) &
    (request.body.date != "")
  ) {
    db.task
      .create({
        name: request.body.n_task,
        due: due_date,
        userId: request.body.agent,
        status: false
      })
      .then(task => {
        // console.log("task: " + task.get('name') + " ");
        response.redirect("/todos");
      })
      .catch(next);
  } else {
    // response.send(500, 'ShowAlert')
    response.redirect("/todos");
    console.log("this: " + request.body.n_task);
  }
});

app.post("/todos/:done", function(request, response, next) {
  var tasks = request.body.task;
  if (typeof tasks === "string") {
    tasks = [tasks];
  } else if (typeof tasks === "undefined") {
    tasks = [0];
  }
  tasks = tasks.map(JSON.parse);

  var promises = [];

  if (request.body.action == "done") {
    for (let i = 0; i < tasks.length; i++) {
      var stat = !tasks[i].status;
      var p = db.task.update({ status: stat }, { where: { id: tasks[i].id } });
      promises.push(p);
    }
  } else if (request.body.action == "remove") {
    for (let i = 0; i < tasks.length; i++) {
      var stat = !tasks[i].status;
      var p = db.task.destroy({ where: { id: tasks[i].id } });
      promises.push(p);
    }
  }
  Promise.all(promises)
    .then(result => {
      response.redirect("/todos");
      // response.json({success: true})
    })
    .catch(next);
});

app.get("/canvas", function(request, response) {
  response.render("canvas.html");
});

//===========chat app----------------

app.use("/socket-io", express.static("node_modules/socket.io-client/dist"));

var users = [];
io.on("connection", function(client) {
  // console.log(client.id + " CONNECTED");
  // client.emit("message", "Welcome!")
  // client.users=[];
  // io.emit("users", client.users)

  client.on("user", function(user) {
    client.username = user;
    console.log("user: " + client.username);
    if (!users.includes(user)) {
      users.push(user);
    }

    io.emit("users", users);
    console.log("list of users: " + users);
  });

  client.on("incoming", function(msg, user) {
    io.emit("chat-msg", user, msg);
  });

  client.on("disconnect", function(user) {
    client.emit("message", client.username + " has left the room.");
    console.log(client.username + " EXITED");
  });
});
//===============-------------------------

var PORT = process.env.PORT || 8800;
http.listen(PORT, function () {
  console.log('Listening on port ' + PORT);
});
