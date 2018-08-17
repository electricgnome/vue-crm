<template>
<v-form>
    <v-layout row justify-center>
            <h2> {{title}} </h2>
        </v-layout>
    <Names/>   
    <Details :driverRelation="title"/>  
    <Accidents/>
</v-form>
</template>

<script>
import Names from "./Names";
import Details from "./Details";
import Accidents from "./Accidents";

export default {
    components: {
        Names,       
        Details,       
        Accidents
    },
    props:['title'],
  created(){
    
      
  }

};
</script>
