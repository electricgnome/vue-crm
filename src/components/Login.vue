<template>
<v-form>
<v-container v-model="valid">
    <v-layout justify-center row>
        <v-flex xs6 md3>
            <v-text-field v-model="userName" :rules="userNameRules" :counter="12" label="*Username" required></v-text-field>
        </v-flex>
        <v-flex xs6 md3>
            <v-text-field v-model="password" :rules="passwordRules" :counter="12" label="*password" required></v-text-field>
        </v-flex>
    </v-layout>
</v-container>
 <v-btn color="success">Login</v-btn>
</v-form>

</template>

<script>
export default {
    data: () => ({
        valid: false,
        userName: "",
        password: "",
        userNameRules: [
            v => !!v || "Username required",
            v => v.length <= 18 || "Username must be less than 18 characters"
        ],
        passwordRules: [
            v => !!v || "Password required",
            v => v.length <= 18 || ":Password must be less than 18 characters"
        ]
    })
   
};
</script>
