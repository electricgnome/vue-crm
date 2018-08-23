<template>
<v-form ref="form" v-model="valid" lazy-validation>
    <v-layout row justify-center>
        <h2> Tickets or Accidents in the past 5 years?</h2>
    </v-layout>
    <v-layout row justify-center>
        <h3>Please be honest, your driving record will be verified.</h3>
    </v-layout>

    <v-layout row justify-center>

        <v-flex offset-md1 xs6 md4 >
          
            <div>
                <v-btn flat @click="subtract('ticketCount')">
                    <v-icon small>remove</v-icon>
                </v-btn>
                Tickets: {{ticketCount}}
                <v-btn flat @click="sum('ticketCount')">
                    <v-icon small right>add</v-icon>
                </v-btn>
            </div>

        </v-flex>
        <v-flex xs6 md4>
    
            <div>
                <v-btn flat @click="subtract('accidentCount')">
                    <v-icon small>remove</v-icon>
                </v-btn>
                    Accidents: {{accidentCount}}
                <v-btn flat @click="sum('accidentCount')">
                    <v-icon small right>add</v-icon>
                </v-btn>
            </div>

        </v-flex>

    </v-layout>
</v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    ticketCount: 0,
    accidentCount: 0
  }),
  methods: {
    sum(counter) {
      console.log(counter + " " + this[counter]);
      counter = this[counter] < 5 ? this[counter]++ : this[counter];
    },
    subtract(counter) {
      console.log(counter + " " + this[counter]);
      counter = this[counter] > 0 ? this[counter]-- : this[counter];
    }
  },
  created() {
    Event.$on("get-drivers", () => {
      let details = {
        tickets: this.$data.ticketCount,
        accidents: this.$data.accidentCount
      };
      this.$emit("details", details);
    });
  }
};
</script>
