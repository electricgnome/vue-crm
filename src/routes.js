import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);


import Stepper from "./components/Stepper";
import CustomerTable from "./components/CustomerTable";


let routes= [
    {path: '/', component: CustomerTable},
    {path: '/newcustomer', component: Stepper}
]

export default new VueRouter({
    
    routes
   
})