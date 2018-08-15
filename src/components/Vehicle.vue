<template>
<v-form v-model="valid">
    <v-container>
        <v-layout row justify-center>
            <h2> Vehicle 1</h2>
        </v-layout>
        <v-layout row justify-center>
            <h3>What vehicle are we insureing today?</h3>
        </v-layout>

        <v-layout row justify-center>
            <v-flex xs2>
                <v-text-field v-model="vin" :rules="vinRules" :counter="17" label="*VIN" required></v-text-field>
            </v-flex>
            <v-flex xs6 md3>
                <div>
                    <v-btn color="primary"> VERIFY VIN </v-btn>
                </div>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs1>
                <v-text-field v-model="year" :counter="4" label="Year"></v-text-field>
            </v-flex>
            <v-flex xs1>
                <v-text-field v-model="make" label="Make"></v-text-field>
            </v-flex>
            <v-flex xs1>
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
            <v-flex xs6 md3>
                <v-select :items="coverages" v-model="coverage" standard label="Desired coverage:"></v-select>
            </v-flex>

            <v-flex xs2>
                <v-select :items="deductibles" v-model="deductible" standard label="Desired Deductible:"></v-select>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <h2> Additional Coverage:</h2>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs6 md3>
                <v-checkbox v-model="supplemental" label="Personal Injury Protection (PIP)" value="pip" color="primary"></v-checkbox>
                <v-checkbox v-model="supplemental" label="Uninsured Motorist" value="um" color="primary"></v-checkbox>
            </v-flex>
            <v-flex xs6 md3>
                <v-checkbox v-model="supplemental" label="Rental" value="rental" color="primary"></v-checkbox>
                <v-checkbox v-model="supplemental" label="Towing" value="towing" color="primary"></v-checkbox>
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
    year: "",
    make: "",
    model: "",
    vinRules: [
      v => !!v || "VIN required",
      v => v.length == 17 || "VIN must be exactly 17 characters"
    ],
    coverages: ["liability only", "Comprehensive/Collision (Full Coverage)"],
    coverage: "",
    deductibles: ["none", "500.00", "1000.00"],
    deductible: "",
    supplemental: []
  })
};
</script>
