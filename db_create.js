const db = require("./models");

function dataToCustomer(payload) {
  for (let i = 0; i < payload.drivers.length; i++) {
    return {
      first_name: payload.drivers[i].firstName,
      last_name: payload.drivers[i].lastName,
      birthdate: payload.drivers[i].dob,
      contact: JSON.stringify({
        phone: payload.drivers[i].phone,
        email: payload.drivers[i].email
      }),
      gender: payload.drivers[i].gender,
      marital_status: payload.drivers[i].marritalStatus,
      occupation: payload.drivers[i].occupation,
      id_type: payload.drivers[i].idType,
      id_number: payload.drivers[i].idNumber,
      address: payload.drivers[i].street,
      city: payload.drivers[i].city,
      state: payload.drivers[i].state,
      zip: payload.drivers[i].zip,
      tickets: payload.drivers[i].tickets,
      accidents: payload.drivers[i].accidents,
      at_fault: payload.drivers[i].at_fault,
      pref_lang: payload.drivers[i].pref_lang,
      home_owner: payload.drivers[i].homeOwner,
      has_pop: payload.drivers[i].pop,
      pop_length: payload.drivers[i].popLength,
      pop_carrier: payload.drivers[i].popCarrier,
      status: payload.drivers[i].status
    };
  }
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
    status: payload.status
  };
}

function dataToDriver(payload, customerId, policyId) {
  for (let i = 0; i < payload.drivers.length; i++) {
    return {
      relation: payload.drivers[i].relation,
      customerId: customerId,
      policyId: policyId
    };
  }
}

function dataToVehicle(payload, policyId) {
  console.log("Adding cars")
  for (let i = 0; i < payload.vehicles.length; i++) {
    return {
      vin: payload.vehicles[i].vin,
      year: payload.vehicles[i].year,
      make: payload.vehicles[i].make,
      model: payload.vehicles[i].model,
      coverage: payload.vehicles[i].coverage,
      deductible: payload.vehicles[i].deductible,
      pip: payload.vehicles[i].supplemental.pip,
      um: payload.vehicles[i].supplemental.um,
      rental: payload.vehicles[i].supplemental.rental,
      towing: payload.vehicles[i].supplemental.towing,
      policyId: policyId
    };
  }
}

function dataToTables(payload, nextFn) {
  db.customer.create(dataToCustomer(payload)).then(result => {
    let customerId = result.id;
    console.log("customer ID: " + customerId);
    db.policy.create(dataToPolicy(payload)).then(result => {
      let policyId = result.id;
      Promise.all([
        db.driver.create(dataToDriver(payload, customerId, policyId)),
        db.vehicle.create(dataToVehicle(payload, policyId))
      ]);
    });
  });
}

exports.dataToTables = dataToTables;
