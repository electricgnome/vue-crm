<template>
<v-container>
    <v-layout row justify-center>
        <h2> Tickets or Accidents in the past 5 years?</h2>
    </v-layout>
    <v-layout row justify-center>
        <h3>Please be honest, your driving record will be verified.</h3>
    </v-layout>
    
    <v-layout row justify-center>
        
        <v-flex xs3>
             <div>
                <p>Tickets: {{ticketCount}} </p>
            </div>
            <div>
                <v-btn flat>-</v-btn>
                <v-btn flat>+</v-btn>
            </div>
           
        </v-flex>
        <v-flex xs3>
            <div>
                Accidents: {{accidentCount}}
            </div>
            <div>
                <v-btn flat>-</v-btn>
                <v-btn flat>+ </v-btn>
            </div>
            
        </v-flex>

    </v-layout>
</v-container>
</template>

<script>
export default {
    data: ()=> ({
        ticketCount: 0,
        accidentCount: 0
    })
};
</script>
