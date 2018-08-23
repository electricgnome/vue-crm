<template>
<v-form v-model="valid">
    <v-container>
        <v-layout row justify-center>
            <h2> {{title}}</h2>
        </v-layout>
        <v-layout row justify-center>
            <h3>What vehicle are we insureing today?</h3>
        </v-layout>

        <v-layout row justify-center>
            <v-flex offset-md2 xs8 md2>
                <v-text-field v-model="vin" :rules="vinRules" :counter="17" label="*VIN" required validate-on-blur></v-text-field>
            </v-flex>
            <v-flex xs4 md3>
                <div>
                    <v-btn color="primary" @click="verifyVin" > VERIFY VIN </v-btn>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs4 md1>
                <v-text-field v-model="year" :counter="4" label="Year"></v-text-field>
            </v-flex>
            <v-flex xs4 md1>
                <v-text-field v-model="make" label="Make"></v-text-field>
            </v-flex>
            <v-flex xs4 md1>
                <v-text-field v-model="model" label="Model"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <h2> Coverage</h2>
        </v-layout>
        <v-layout row justify-center>
            <h3>What coverage would you like?</h3>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs8 md3>
                <v-select :items="coverages" v-model="coverage" standard label="Desired coverage:"></v-select>
            </v-flex>

            <v-flex xs4 md2>
                <v-select :items="deductibles" v-model="deductible" standard label="Deductible:" v-if="this.coverage === 'full'"></v-select>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <h2> Additional Coverage:</h2>
        </v-layout>
        <v-layout row justify-center>
            <v-flex offset-md2 xs6 md3>
                <v-checkbox v-model="supplemental" label="Personal Injury Protection (PIP)" value="pip" color="primary" v-if="this.coverage === 'full'"></v-checkbox>
                <v-checkbox v-model="supplemental" label="Uninsured Motorist" value="um" color="primary"></v-checkbox>
            </v-flex>
            <v-flex xs6 md3>
                <v-checkbox v-model="supplemental" label="Rental" value="rental" color="primary" v-if="this.coverage === 'full'"></v-checkbox>
                <v-checkbox v-model="supplemental" label="Towing" value="towing" color="primary" v-if="this.coverage === 'full'"></v-checkbox>
            </v-flex>
        </v-layout>

    </v-container>
</v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    vin: "",
    year: 0,
    make: "",
    model: "",
    vinRules: [
      v => !!v || "VIN required",
      v => v.length == 17 || "VIN must be exactly 17 characters"
    ],
    coverages: [{text: "liability only", value:"liability"}, {text: "Comprehensive/ Collision (Full Coverage)", value:"full"}],
    coverage: "",
    deductibles: [ {text:"None", value: "0", disabled: true}, {text:"$500.00", value: "500.00"}, {text:"$1,000.00", value: "1000.00"},],
    deductible: 0,
    supplemental: []
  }),
  props:['title'],
  methods:{
      verifyVin(){
          console.log("Verifying")
          console.log(this.vin)
        let payload =  JSON.stringify(this.vin)
            axios
                .post(
                    "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesBatch/",
                    
                    {headers: { 'content-type': 'application/x-www-form-urlencoded' },data:payload}
                  
                )
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (err) {
                    console.log(err);
                });
      }

  },
    created() {
        Event.$on('get-drivers',()=> {
            let details= {vin: this.$data.vin, year: this.$data.year, make: this.$data.make, model: this.$data.model, 
            coverage: this.$data.coverage, deductible: this.$data.deductible, supplemental: this.$data.supplemental}
            Event.$emit('vehicle', details)           
            })
        }
};
</script>
