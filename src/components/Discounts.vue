<template>
<v-form>
    <v-container>
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

    </v-container>
</v-form>
</template>

<script>
export default {
    data: () => ({
        homeOwner: false,
        pop: false,
        popLengths: ['Less than 6 months', '6 to 11 months', '12 months or longer'],
        popLength: "",
        popCarrier: ""
    })
};
</script>
