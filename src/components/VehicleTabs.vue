<template>
<v-container>
    <v-tabs slot="extension" v-model="tab" color="blue">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab> Primary </v-tab>
        <v-tab v-for="item in vehicles" :key="item">
            {{ item }}
        </v-tab>
        <v-btn @click="addVehicle"> Add Vehicle </v-btn>
        <v-btn @click="remVehicle"> Remove Vehicle </v-btn>
    </v-tabs>

    <v-tabs-items v-model="tab">
        <v-tab-item>
            <v-card flat>
                <Vehicle title="Vehicle 1" />
            </v-card>
        </v-tab-item>
        <v-tab-item v-for="item in vehicles" :key="item">
            <v-card flat>
                <Vehicle :title="item" />
            </v-card>
        </v-tab-item>
    </v-tabs-items>
</v-container>
</template>

<script>
import Vehicle from "./Vehicle";

export default {
    name: "Tabs",
    components: {
        Vehicle
    },
    data() {
        return {
            tab: null,
            vehicleCnt: 1,
            vehicles: [],

        };
    },
    methods: {
        addVehicle() {
            this.vehicleCnt++;
            this.vehicles.push("Vehicle " + this.vehicleCnt);
            const tab = parseInt(this.tab);
            this.tab = tab < this.vehicleCnt ? tab + 1 : 0;
        },
        remVehicle() {
            this.vehicleCnt > 1 ? this.vehicleCnt-- : null;
            this.vehicles.pop();
            const tab = parseInt(this.tab);
            this.tab = tab > 1 ? tab - 1 : 0;
        }
    }
};
</script>
