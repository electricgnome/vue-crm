<template>
<v-form ref="form" v-model="valid" lazy-validation>
   
        <v-layout row justify-center>
            <h2> Discounts</h2>
        </v-layout>
        <v-layout row justify-center>
            <h3>Lets see what discounts you qualify for</h3>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs6>
                <v-switch :label="`Are you a home owner: ${homeOwner.toString()}`" v-model="homeOwner" color="primary"></v-switch>

                <v-switch :label="`Are you currently insured (personal/commercial auto): ${pop.toString()}`" v-model="pop" color="primary"></v-switch>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
            <v-flex xs6 md3>
                <v-select :items="popLengths" v-model="popLength" standard label="Length of coverage without lapse:"></v-select>
            </v-flex>
            <v-flex xs6 md3>
                <v-text-field v-model="popCarrier" label="With who (Geico, Progressive, All State, etc...)"></v-text-field>
            </v-flex>
        </v-layout>
</v-form>
</template>

<script>
export default {
  data: () => ({
    valid:true,
    homeOwner: false,
    pop: false,
    popLengths: ["Less than 6 months", "6 to 11 months", "12 months or longer"],
    popLength: "",
    popCarrier: ""
  }),
    created() {
        Event.$on('driver',()=> {
            let details= {homeOwner: this.$data.homeOwner, pop: this.$data.pop, popLength: this.$data.popLength, popCarrier: this.$data.popCarrier}
            Event.$emit('discounts', details)           
            })
        },
    destroyed(){
        Event.$off('driver')
    }
};
</script>
