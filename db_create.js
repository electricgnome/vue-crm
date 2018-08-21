const db = require("./models");

function dataToCustomer(driver) {
  return {
    first_name: driver.firstName,
    last_name: driver.lastName,
    birthdate: driver.dob,
    contact: JSON.stringify({
      phone: driver.phone,
      email: driver.email
    }),
    gender: driver.gender,
    marital_status: driver.marritalStatus,
    occupation: driver.occupation,
    id_type: driver.idType,
    id_number: driver.idNumber,
    address: driver.street,
    city: driver.city,
    state: driver.state,
    zip: driver.zip,
    tickets: driver.tickets,
    accidents: driver.accidents,
    at_fault: driver.at_fault,
    pref_lang: driver.pref_lang,
    home_owner: driver.homeOwner,
    has_pop: driver.pop,
    pop_length: driver.popLength,
    pop_carrier: driver.popCarrier,
    status: driver.status
  };
}

function dataToPolicy(payload) {
  return {
    policy_id: payload.policy_id || 10,
    carrier: payload.carrier || "none",
    // policy_type: payload.
    agent: payload.agent || "Emy",
    down_payment: payload.down_payment || 0,
    premium: payload.premium || 0,
    effective_date: payload.effective_date || Date.now(),
    // renewal_date: payload.renewal_date
    status: payload.status || "Quote"
  };
}

function dataToDriver(driver, customerId, policyId) {
  return {
    relation: driver.relation,
    customerId: customerId,
    policyId: policyId
  };
}

function dataToVehicle(vehicle) {
  return {
    vin: vehicle.vin,
    year: vehicle.year,
    make: vehicle.make,
    model: vehicle.model,
    coverage: vehicle.coverage,
    deductible: vehicle.deductible,
    pip: vehicle.supplemental.includes("pip"),
    um: vehicle.supplemental.includes("um"),
    rental: vehicle.supplemental.includes("rental"),
    towing: vehicle.supplemental.includes("towing")
    // policyId: policyId
  };
}

function dataToPolicyVehicle(policyId, vehicleId) {
  return {
    policyId: policyId,
    vehicleId: vehicleId
    
  };
}

function dataToTables(payload) {
  const drivers = payload.drivers.map(driver => dataToCustomer(driver));
  const vehicles = payload.vehicles.map(vehicle => dataToVehicle(vehicle));
  let customerId = [];
  let vehicleId=[];
  // console.log(drivers);
  const driverPromises = drivers.map(driver => db.customer.create(driver));
  const vehiclePromises = vehicles.map(vehicle => db.vehicle.create(vehicle));

  Promise.all(driverPromises).then(results => {
    results = JSON.stringify(results);
    results = JSON.parse(results);
    results.map(result => customerId.push(result));

    Promise.all(vehiclePromises).then(results => {
      results = JSON.stringify(results);
      results = JSON.parse(results);
      results.map(result => vehicleId.push(result));
      // console.log(customerId)
      // console.log(vehicleId)

    db.policy.create(dataToPolicy(payload)).then(result => {
      let policyId = result.id;
      let customerIterator = customerId.entries();
      let vehicleIterator = vehicleId.entries();

      const driverLinks = payload.drivers.map(driver =>
        dataToDriver(driver, customerIterator.next().value[1].id, policyId)
      );
      const driverLinkPromises = driverLinks.map(link =>
        db.driver.create(link, customerId, policyId)
      );
      // console.log(vehicleIterator.next().value[1].id)

      const vehicleLinks = payload.vehicles.map(vehicle =>
        dataToPolicyVehicle(policyId, vehicleIterator.next().value[1].id)
      );
      console.log(vehicleLinks)
      const vehicleLinkPromises = vehicleLinks.map(link =>        
        db.policyVehicle.create(link)
      );

      // const vehicles = payload.vehicles.map(vehicle =>
      //   dataToVehicle(vehicle, policyId)
      // );
     
      // const vehiclePromises = vehicles.map(vehicle =>
      //   db.vehicle.create(vehicle)
      // ).then(result => {
      //   result = JSON.stringify(result);
      //   result = JSON.parse(result);
      //   result.map(result => vehicleId.push(result));
      //   const policyVehicles = 
      // })
      Promise.all([driverLinkPromises, vehicleLinkPromises]);
    });
  });
})
}


exports.dataToTables = dataToTables;
