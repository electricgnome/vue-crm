<template>
    <v-container v-model="valid">
        <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-text-field mask="phone" v-model="phone" :rules="phoneRules" :counter="10" label="*Cell Phone" required></v-text-field>
            </v-flex>
            <v-flex xs6 md3>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        phone: "",
        email:"",
        phoneRules: [v=> !!v || "Cell Phone is requiered", v => v.length <= 11 || "Phone must be 10 characters"],
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+/.test(v) || "E-mail must be valid"
        ]
    })
};
</script>
