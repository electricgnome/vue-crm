<template>
  <v-app>
    <NavBar/>
     <Stepper/>
    <CustomerTable/>
   
    <!-- <Carriers/> -->
    <!-- <About/>
    <contactUs/> -->
  </v-app >
</template>
  
<script>
import NavBar from "./components/NavBar";
import Stepper from "./components/Stepper";
import Carriers from "./components/Carriers";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import CustomerTable from "./components/CustomerTable";




export default {
  name: "App",
  components: {
    NavBar,
    Stepper,
    Carriers,
    About,
    ContactUs,
    CustomerTable
  }
};
</script>
