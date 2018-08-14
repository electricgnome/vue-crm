<template>
    <v-form v-model="valid">
        <v-container>
          <v-layout row justify-center>
            <h2> Primary Driver</h2>
        </v-layout>
       

            <v-layout justify-center row>
            <v-flex xs3>
                <v-text-field
                v-model="FirstName"
                :rules="FirstNameRules"
                :counter="12"
                label="*First Name"
                required
                ></v-text-field>
            </v-flex>
            <v-flex xs3>
                <v-text-field
                v-model="LastName"
                :rules="LastNameRules"
                :counter="12"
                label="*Last Name"
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
    FirstName: "",
    LastName: "",
    FirstNameRules: [
      v => !!v || "First Name required",
      v => v.length <= 12 || "First Name must be less than 12 characters"
    ],
    LastNameRules: [
      v => !!v || "Last Name required",
      v => v.length <= 12 || ":Last Name must be less than 12 characters"
    ]
  })
};
</script>