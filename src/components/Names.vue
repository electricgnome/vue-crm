<template>
<v-form ref="form" v-model="valid" lazy-validation>
    <v-layout justify-center row>
        <v-flex xs6 md3>
            <v-text-field v-model="firstName" :rules="firstNameRules" :counter="12" label="*First Name" required></v-text-field>
        </v-flex>
        <v-flex xs6 md3>
            <v-text-field v-model="lastName" :rules="lastNameRules" :counter="12" label="*Last Name" required></v-text-field>
        </v-flex>
    </v-layout>
</v-form>
</template>

<script>
export default {
    data: () => ({
        valid: true,
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
    }),
    created() {
        Event.$on('get-drivers',()=> {
            let details= {firstName: this.$data.firstName, lastName: this.$data.lastName}
            this.$emit('details', details)           
            })
        }
};
</script>
