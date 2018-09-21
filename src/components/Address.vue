<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-text-field v-model="street" label="Street Address" requiered></v-text-field>
            </v-flex>
            <v-flex xs6 md3>
                <v-text-field v-model="city" label="City" requiered></v-text-field>
            </v-flex>
        </v-layout>
         <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-select
          :items="states"
          v-model="state"
          auto
          hide-details
          label="State"
          single-line
        ></v-select>
            </v-flex>
            <v-flex xs6 md3>
                <v-text-field v-model.number="zipCode" label="Zip Code" requiered></v-text-field>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    street: "",
    city: "Houston",
    state: "Texas",
    zipCode: null,
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ]
  }),
  created() {
    Event.$on("get-drivers", () => {
      let details = {
        street: this.$data.street,
        city: this.$data.city,
        state: this.$data.state,
        zip: this.$data.zipCode
      };
      this.$emit("details", details);
    });
  },
        destroyed(){
            Event.$off('get-drivers')
        }
};
</script>
