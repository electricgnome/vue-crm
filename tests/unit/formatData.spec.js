import { expect } from "chai";
import assert from "assert";
// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     });
//     expect(wrapper.text()).to.include(msg);
//   });
// });

const inputData = [
  {
    drivers: [
      {
        firstName: "juan",
        lastName: "perez",
        phone: "9564039209",
        email: "juan@23.com",
        gender: "Male",
        marritalStatus: "Married",
        occupation: "engineer",
        dob: "2018-08-01",
        relation: "Self",
        idType: "Texas DL",
        idNumber: "3333333333",
        street: "234 nowhere",
        city: "Houston",
        state: "Texas",
        zip: 77089,
        tickets: 1,
        accidents: 1,
        homeOwner: true,
        pop: true,
        popLength: "6 to 11 months",
        popCarrier: "usaa"
      },
      {
        firstName: "fer",
        lastName: "perez",
        gender: "Female",
        marritalStatus: "Married",
        occupation: "nurse",
        dob: "2018-08-31",
        relation: "Spouse",
        idType: "Texas DL",
        idNumber: "9999999999",
        tickets: 2,
        accidents: 2
      }
    ],
    vehicles: [
      {
        vin: "JT6HF10U3Y0133607",
        year: "2000",
        make: "lexus",
        model: "crv",
        coverage: "Comprehensive/ Collision (Full Coverage)",
        deductible: "1000.00",
        supplemental: ["pip", "um"]
      },
      {
        vin: "JH4NA1150RT000268",
        year: "2018",
        make: "nissan",
        model: "leaf",
        coverage: "Comprehensive/ Collision (Full Coverage)",
        deductible: "500.00",
        supplemental: ["rental", "towing"]
      }
    ]
  }
];

const outputData = {
  drivers: [
    {
      firsName: "ron",
      lastName: "pepe",
      phone: "9983928924",
      email: "som@som.com",
      gender: "Male",
      marritalStatus: "Married",
      occupation: "sales",
      dob: "2018-08-15",
      relation: "Self",
      idType: "Texas DL",
      IdNumber: "4938939829",
      street: "123 somewhere",
      city: "Houston",
      state: "Texas",
      zip: 77077,
      tickets: 1,
      accidents: 1,
      homeOwner: true,
      pop: true,
      popLength: "6 to 11 months",
      popCarrier: "usaa"
    },
    {
      firsName: "perla",
      lastName: "perez",
      gender: "Female",
      marritalStatus: "Married",
      occupation: "nurse",
      dob: "2018-08-14",
      relation: "Spouse",
      idType: "Texas DL",
      IdNumber: "2343243242323",
      tickets: 1,
      accidents: 1
    },
    {
      firsName: "fernando",
      lastName: "moralez",
      gender: "Male",
      marritalStatus: "Single",
      occupation: "programmer",
      dob: "2018-08-20",
      relation: "Sibling",
      idType: "Texas DL",
      IdNumber: "309390892",
      tickets: 1,
      accidents: 0
    }
  ],
  vehicles: [
    {
      vin: "234ir2uh3r823rhku",
      year: "2001",
      make: "ford",
      model: "fiesta",
      coverage: "liability only",
      deductible: "500.00",
      supplemental: ["pip", "rental", "towing"]
    },
    {
      vin: "32423tr34f34tr534",
      year: "2001",
      make: "chevy",
      model: "cobra",
      coverage: "Comprehensive/ Collision (Full Coverage)",
      deductible: "500.00",
      supplemental: ["pip", "rental", "towing", "um"]
    },
    {
      vin: "234848239rfjnn342",
      year: "1978",
      make: "nissan",
      model: "leaf",
      coverage: "liability only",
      deductible: "",
      supplemental: []
    }
  ]
};

function convertFrontendToBackend(input) {
  let payload = { customer: input[0] };
  payload.customer = Object.assign(
    payload.customer,
    input[1],
    input[2],
    input[3],
    input[4],
    input[6]
  );
  payload = Object.assign(payload, { vehicle: input[5] });

  return payload;
}

describe("data formatting function", function() {
  it("convert frontend format to backend format", function() {
    expect(
      assert.deepStrictEqual(convertFrontendToBackend(inputData), outputData)
    );
  });
});

// describe("example test", function() {
//   it("basic test", function() {
//     expect(assert.deepStrictEqual({ foo: "bar" }, { foo: "bar" }));
//   });
// });

//7 -minimum.
//primary has 6 elements + 1 vehicle
//spouse has 3 elements = 10.
//driver has 3 elements.
//vehicle has 1.

//pattern: primary(6), vehicle1(1), spouse(3), driver3(3), driver4(3), vehicle2(1), vehicle3(1), vehicle4(1)


[ { id: 1,
  relation: 'Self',
  createdAt: '2018-08-21T16:58:50.543Z',
  updatedAt: '2018-08-21T16:58:50.543Z',
  policyId: 1,
  customerId: 1,
  policy:
   { id: 1,
     policy_id: '10',
     carrier: 'none',
     policy_type: null,
     agent: 'Emy',
     down_payment: '0.00',
     premium: '0.00',
     effective_date: '2018-08-21',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-21T16:58:50.537Z',
     updatedAt: '2018-08-21T16:58:50.537Z' },
  customer:
   { id: 1,
     first_name: 'Fernando',
     last_name: 'sanchez',
     birthdate: '1994-01-06',
     contact: '{"phone":"9569879532","email":"fer@mail.com"}',
     gender: 'Male',
     marital_status: 'Single',
     occupation: 'mechanic',
     id_type: 'Texas DL',
     id_number: '4545455454',
     address: '234 somewhere st',
     city: 'Houston',
     state: 'Texas',
     zip: 77085,
     tickets: 0,
     accidents: 1,
     at_fault: null,
     pref_lang: null,
     home_owner: true,
     has_pop: true,
     pop_length: 'Less than 6 months',
     pop_carrier: 'Geico',
     status: null,
     createdAt: '2018-08-21T16:58:50.341Z',
     updatedAt: '2018-08-21T16:58:50.341Z' } },
{ id: 2,
  relation: 'Spouse',
  createdAt: '2018-08-21T16:58:50.544Z',
  updatedAt: '2018-08-21T16:58:50.544Z',
  policyId: 1,
  customerId: 2,
  policy:
   { id: 1,
     policy_id: '10',
     carrier: 'none',
     policy_type: null,
     agent: 'Emy',
     down_payment: '0.00',
     premium: '0.00',
     effective_date: '2018-08-21',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-21T16:58:50.537Z',
     updatedAt: '2018-08-21T16:58:50.537Z' },
  customer:
   { id: 2,
     first_name: 'Ramona',
     last_name: 'Perez',
     birthdate: '2018-08-02',
     contact: '{}',
     gender: 'Female',
     marital_status: 'Married',
     occupation: 'nurse',
     id_type: 'Texas DL',
     id_number: '3333333333',
     address: null,
     city: null,
     state: null,
     zip: null,
     tickets: 1,
     accidents: 0,
     at_fault: null,
     pref_lang: null,
     home_owner: null,
     has_pop: null,
     pop_length: null,
     pop_carrier: null,
     status: null,
     createdAt: '2018-08-21T16:58:50.344Z',
     updatedAt: '2018-08-21T16:58:50.344Z' } },
{ id: 3,
  relation: 'Driver 2',
  createdAt: '2018-08-21T16:58:50.545Z',
  updatedAt: '2018-08-21T16:58:50.545Z',
  policyId: 1,
  customerId: 3,
  policy:
   { id: 1,
     policy_id: '10',
     carrier: 'none',
     policy_type: null,
     agent: 'Emy',
     down_payment: '0.00',
     premium: '0.00',
     effective_date: '2018-08-21',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-21T16:58:50.537Z',
     updatedAt: '2018-08-21T16:58:50.537Z' },
  customer:
   { id: 3,
     first_name: 'Roberto',
     last_name: 'sanchez',
     birthdate: '1968-01-03',
     contact: '{}',
     gender: 'Male',
     marital_status: 'Single',
     occupation: 'sales',
     id_type: 'Texas DL',
     id_number: '8787878787',
     address: null,
     city: null,
     state: null,
     zip: null,
     tickets: 0,
     accidents: 1,
     at_fault: null,
     pref_lang: null,
     home_owner: null,
     has_pop: null,
     pop_length: null,
     pop_carrier: null,
     status: null,
     createdAt: '2018-08-21T16:58:50.345Z',
     updatedAt: '2018-08-21T16:58:50.345Z' } } ]
[ { id: 1,
  createdAt: '2018-08-21T16:58:50.549Z',
  updatedAt: '2018-08-21T16:58:50.549Z',
  policyId: 1,
  vehicleId: 1,
  policy:
   { id: 1,
     policy_id: '10',
     carrier: 'none',
     policy_type: null,
     agent: 'Emy',
     down_payment: '0.00',
     premium: '0.00',
     effective_date: '2018-08-21',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-21T16:58:50.537Z',
     updatedAt: '2018-08-21T16:58:50.537Z' },
  vehicle:
   { id: 1,
     vin: '2S3TD52V3Y6103456',
     year: 2001,
     make: 'suzuki',
     model: 'some',
     coverage: 'Comprehensive/ Collision (Full Coverage)',
     deductible: '500.00',
     pip: true,
     um: true,
     rental: true,
     towing: true,
     leinholder: null,
     createdAt: '2018-08-21T16:58:50.345Z',
     updatedAt: '2018-08-21T16:58:50.345Z' } },
{ id: 2,
  createdAt: '2018-08-21T16:58:50.549Z',
  updatedAt: '2018-08-21T16:58:50.549Z',
  policyId: 1,
  vehicleId: 2,
  policy:
   { id: 1,
     policy_id: '10',
     carrier: 'none',
     policy_type: null,
     agent: 'Emy',
     down_payment: '0.00',
     premium: '0.00',
     effective_date: '2018-08-21',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-21T16:58:50.537Z',
     updatedAt: '2018-08-21T16:58:50.537Z' },
  vehicle:
   { id: 2,
     vin: '3G1JC1245WS848211',
     year: 1978,
     make: 'chevy',
     model: 'silverado',
     coverage: 'liability only',
     deductible: '',
     pip: false,
     um: true,
     rental: false,
     towing: false,
     leinholder: null,
     createdAt: '2018-08-21T16:58:50.345Z',
     updatedAt: '2018-08-21T16:58:50.345Z' } } ]
