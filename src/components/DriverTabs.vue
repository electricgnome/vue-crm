<template>
<v-container>

    <v-tabs slot="extension" v-model="tab" color="blue">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab> Primary </v-tab>
        <v-tab v-for="item in drivers" :key="item">
            {{ item }}
        </v-tab>
        <v-btn @click="addDriver"> Add Driver </v-btn>
        <v-btn @click="remDriver"> Remove Driver </v-btn>
    </v-tabs>

    <v-tabs-items v-model="tab">
        <v-tab-item>
            <v-card flat>
                <DriverPrimary title="Primary Driver" />
            </v-card>
        </v-tab-item>
        <v-tab-item v-for="item in drivers" :key="item">
            <v-card flat>
                <DriverSecondary :title="item"/>
            </v-card>
        </v-tab-item>
    </v-tabs-items>
</v-container>
</template>

<script>
import DriverPrimary from "./DriverPrimary";
import DriverSecondary from "./DriverSecondary";

export default {
  name: "Tabs",
  components: {
    DriverPrimary,
    DriverSecondary
  },
  data() {
    return {
      tab: null,
      driverCnt: 1,
      drivers: []
    };
  },
  methods: {
    addDriver() {
      this.driverCnt++;
      this.drivers.push("Driver " + this.driverCnt);
      const tab = parseInt(this.tab);
      this.tab = tab < this.driverCnt ? tab + 1 : 0;
     
    },
    remDriver() {
      this.driverCnt > 1 ? this.driverCnt-- : null;
      this.drivers.pop();
      const tab = parseInt(this.tab); 
      this.tab = tab > 1 ? tab - 1 : 0;

    },
    addSpouse() {
      
      if (!this.drivers.includes("Spouse") && this.tab==0 ) {
        this.driverCnt++;
        this.drivers.splice(0,0,"Spouse");
       
      }
    }
  },
    created() {
      
      Event.$on('add-spouse',()=> {this.addSpouse()})
  }
};
</script>
