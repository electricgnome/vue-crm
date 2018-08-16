<template>
<v-form>
       <v-layout row justify-center>
            <h2> {{title}} </h2>
        </v-layout>
    <Names/>
    <Contact/>
    <Details driverRelation="Self"/>
    <Address/>
    <Accidents/>
</v-form>
</template>

<script>
import Names from "./Names";
import Contact from "./Contact";
import Details from "./Details";
import Address from "./Address";
import Accidents from "./Accidents";

export default {
    components: {
        Names,
        Contact,
        Details,
        Address,
        Accidents
    },
    props:['title']
};
</script>
