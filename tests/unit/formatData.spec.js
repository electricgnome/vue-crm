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
  createdAt: '2018-08-20T22:43:10.546Z',
  updatedAt: '2018-08-20T22:43:10.546Z',
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
     effective_date: '2018-08-20',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-20T22:43:10.539Z',
     updatedAt: '2018-08-20T22:43:10.539Z' },
  customer:
   { id: 1,
     first_name: 'Ruben',
     last_name: 'Perez',
     birthdate: '2018-08-01',
     contact: '{"phone":"9844984938","email":"ruben@perez.com"}',
     gender: 'Male',
     marital_status: 'Married',
     occupation: 'engineer',
     id_type: 'Texas DL',
     id_number: '9999999999',
     address: '23 nowhere',
     city: 'Houston',
     state: 'Texas',
     zip: 77077,
     tickets: 1,
     accidents: 2,
     at_fault: null,
     pref_lang: null,
     home_owner: true,
     has_pop: true,
     pop_length: '6 to 11 months',
     pop_carrier: 'USAA',
     status: null,
     createdAt: '2018-08-20T22:43:10.492Z',
     updatedAt: '2018-08-20T22:43:10.492Z' } },
{ id: 2,
  relation: 'Spouse',
  createdAt: '2018-08-20T22:43:10.546Z',
  updatedAt: '2018-08-20T22:43:10.546Z',
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
     effective_date: '2018-08-20',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-20T22:43:10.539Z',
     updatedAt: '2018-08-20T22:43:10.539Z' },
  customer:
   { id: 2,
     first_name: 'Perla',
     last_name: 'PErez',
     birthdate: '2018-08-24',
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
     tickets: 2,
     accidents: 1,
     at_fault: null,
     pref_lang: null,
     home_owner: null,
     has_pop: null,
     pop_length: null,
     pop_carrier: null,
     status: null,
     createdAt: '2018-08-20T22:43:10.495Z',
     updatedAt: '2018-08-20T22:43:10.495Z' } } ]
[ { id: 2,
  vin: 'JH4KA4540JC050162',
  year: 1998,
  make: 'accura',
  model: 'leaf',
  coverage: 'Comprehensive/ Collision (Full Coverage)',
  deductible: '1000.00',
  pip: true,
  um: true,
  rental: false,
  towing: false,
  leinholder: null,
  createdAt: '2018-08-20T22:43:10.547Z',
  updatedAt: '2018-08-20T22:43:10.547Z',
  policyId: 1,
  policy:
   { id: 1,
     policy_id: '10',
     carrier: 'none',
     policy_type: null,
     agent: 'Emy',
     down_payment: '0.00',
     premium: '0.00',
     effective_date: '2018-08-20',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-20T22:43:10.539Z',
     updatedAt: '2018-08-20T22:43:10.539Z' } },
{ id: 1,
  vin: 'JH4KA3240HC002301',
  year: 1997,
  make: 'accura',
  model: 'legend',
  coverage: 'Comprehensive/ Collision (Full Coverage)',
  deductible: '500.00',
  pip: false,
  um: false,
  rental: true,
  towing: true,
  leinholder: null,
  createdAt: '2018-08-20T22:43:10.547Z',
  updatedAt: '2018-08-20T22:43:10.547Z',
  policyId: 1,
  policy:
   { id: 1,
     policy_id: '10',
     carrier: 'none',
     policy_type: null,
     agent: 'Emy',
     down_payment: '0.00',
     premium: '0.00',
     effective_date: '2018-08-20',
     renewal_date: null,
     status: 'Quote',
     createdAt: '2018-08-20T22:43:10.539Z',
     updatedAt: '2018-08-20T22:43:10.539Z' } } ]



     //Driver { self, policy > primary info, spouse, policy> spouse info , , Vehicle1, policy, vehicle2, policy }

