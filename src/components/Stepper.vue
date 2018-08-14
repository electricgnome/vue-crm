<template>
<v-stepper v-model="e1">
    <v-stepper-header>
        <v-stepper-step step="1">Drivers</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">Vehicles</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Discounts</v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
        <v-stepper-content step="1">
            <v-card class="mb-5">
                <Names/>
                <Contact/>
                <Details/>
                <Address/>
                <accidents/>
            </v-card>

            <v-btn color="primary" @click="e1 = 2">
                Continue
            </v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
            <v-card class="mb-5" ></v-card>
                <Vehicle/>
            <v-btn color="primary" @click="e1 = 3">
                Continue
            </v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
            <v-card class="mb-5"></v-card>
                <Discounts/>
            <v-btn color="primary" @click="e1 = 1">
                Continue
            </v-btn>

            <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
    </v-stepper-items>
</v-stepper>
</template>

<script>
import Names from "./Names";
import Contact from "./Contact";
import Details from "./Details";
import Address from "./Address";
import Accidents from "./Accidents";
import Vehicle from "./Vehicle";
import Discounts from "./Discounts";



export default {
    components: {
        Names,
        Contact,
        Details,
        Address,
        Accidents,
        Vehicle,
        Discounts
    },
    data() {
        return {
            e1: 0
        };
    }
};
</script>
