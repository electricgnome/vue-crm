<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-text-field mask="phone" v-model="phone" :rules="phoneRules" :counter="10" label="*Cell Phone" validate-on-blur required></v-text-field>
            </v-flex>
            <v-flex xs6 md3>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" validate-on-blur required></v-text-field>
            </v-flex>
        </v-layout>
    </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    phone: "",
    email: "",
    phoneRules: [
      v => !!v || "Cell Phone is requiered",
      v => v.length == 10 || "Phone must be 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),
    created() {
        Event.$on('get-drivers',()=> {
            let details= {phone: this.$data.phone, email: this.$data.email}
            this.$emit('details', details)           
            })
        },
        destroyed(){
            Event.$off('get-drivers')
        }
};
</script>
