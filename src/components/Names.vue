<template>
        <v-container v-model="valid">
          <v-layout row justify-center>
            <h2> Primary Driver</h2>
        </v-layout>
       

            <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-text-field
                v-model="firstName"
                :rules="firstNameRules"
                :counter="12"
                label="*First Name"
                required
                ></v-text-field>
            </v-flex>
            <v-flex xs6 md3>
                <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
                :counter="12"
                label="*Last Name"
                required
                ></v-text-field>
            </v-flex>
            </v-layout>
    </v-container>
</template>


<script>
export default {
  data: () => ({
    valid: false,
    firstName: "",
    lastName: "",
    firstNameRules: [
      v => !!v || "First Name required",
      v => v.length <= 12 || "First Name must be less than 12 characters"
    ],
    lastNameRules: [
      v => !!v || "Last Name required",
      v => v.length <= 12 || ":Last Name must be less than 12 characters"
    ]
  })
};
</script>
