<template>
  <v-form v-model="valid">
<v-container>
            <v-layout justify-center row>
            <v-flex xs3>
    <v-text-field
      v-model="Phone"
      :rules="phoneRules"
      :counter="10"
      label="Cell Phone"
      required
    ></v-text-field>
 </v-flex>
            <v-flex xs3>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
     </v-flex>
            </v-layout>
    </v-container>
   
  </v-form>
</template>


<script>
export default {
  data: () => ({
    valid: false,
    name: "",
    phoneRules: [v => v.length <= 11 || "Phone must be 10 characters"],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  })
};
</script>
