<template>
<v-stepper non-linear v-model="e1">
    <v-stepper-header>
        <v-stepper-step editable step="1">Drivers</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2">Vehicles</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3">Discounts</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
        <v-stepper-content step="1" class="mt-0 pt-1">
            <v-card>
                <v-form ref="form" v-model="valid" lazy-validation>
                <DriverTabs class="mb-0 pt-0" />
                </v-form>
            </v-card>

            <v-btn color="primary" @click="e1 = 2;" @submit="validate">
                Continue
            </v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2" class="mt-0 pt-1">
            <v-card class="mb-0"></v-card>
            <VehicleTabs class="mb-0 pt-0" />
            <v-btn color="primary" @click="e1 = 1">
                Back
            </v-btn>
            <v-btn color="primary" @click="e1 = 3">
                Continue
            </v-btn>
        </v-stepper-content>
        <!--<form @submit=submit()-->
        <v-stepper-content step="3" class="mt-0 pt-1">
            <v-card class="mb-0"></v-card>
            <Discounts class="mb-0 pt-0" />
            <v-btn color="primary" @click="e1 = 2">
                Back
            </v-btn>
            <v-btn color="primary" @click="submit()" v-bind:key="submitBtn" :disabled="clicked.includes(submitBtn)">
                <!-- :disabled="!valid"  -->
                Submit
            </v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
    </v-stepper-items>

</v-stepper>
</template>

<script>
// import axios from "axios";

import DriverTabs from "./DriverTabs";
import VehicleTabs from "./VehicleTabs";
import Discounts from "./Discounts";

export default {
    components: {
        DriverTabs,
        VehicleTabs,
        Discounts
    },
    data() {
        return {
            submitBtn:true,
            valid:true,
            e1: 0,
            payload: {},
            clicked:[]
        };
    },
    methods: {
        validate(){
            if (this.$refs.form.validate()) {
                alert("Valid!")
            }
        },
        submit() {
            this.clicked.push(this.submitBtn)
            this.payload = {drivers:[], vehicles:[]}
            
            
            Event.$emit("get-drivers");
            console.log(JSON.stringify(this.payload.drivers));
            //   const dataForBackend = convertDataForBackend(this.payload)
            axios
                .post(
                    "api/submit",
                    this.$data.payload)
                .then(function (res) {
                    console.log(res);
                
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    },
    created() {
        Event.$on("driver", msg => {
            this.payload.drivers.push(msg);

        }),

        Event.$on("vehicle", msg => {
            this.payload.vehicles.push(msg);

        }),

        Event.$on("discounts", msg => {
            this.payload.drivers.forEach(driver=>{
                if (driver.relation ==="Self"){
                     driver =Object.assign(
                driver, msg);
                }
            })
            // this.payload.drivers[0] =Object.assign(
            //     this.payload.drivers[0], msg);

        })
    },
    destroyed(){
        Event.$off("driver")
        Event.$off("vehicle")
        Event.$off("discounts")

    }
};
</script>
