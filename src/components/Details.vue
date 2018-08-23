<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-radio-group v-model="gender" :mandatory="true">
                    <v-radio label="Male" value="Male" color="primary"></v-radio>
                    <v-radio label="Female" value="Female" color="primary"></v-radio>
                </v-radio-group>
            </v-flex>
            <v-flex xs6 md3>
                <v-radio-group v-model="marritalStatus" :mandatory="true" :disabled="relation =='Spouse' ? true : false">
                    <v-radio label="Single" value="Single" color="primary"></v-radio>
                    <v-radio label="Married/ Common Law" value="Married" color="primary" @change="isMarried"></v-radio>
                </v-radio-group>
            </v-flex>
        </v-layout>
        <v-layout justify-center row>
            <v-flex xs12 md6>
                <v-text-field v-model="occupation" label="Occupation"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-menu ref="date" :close-on-content-click="false" v-model="date" :nudge-right="40" :return-value.sync="dob" lazy transition="scale-transition" offset-y full-width min-width="290px">
                    <v-text-field slot="activator" v-model="dob" label="Date of Birth" prepend-icon="event" readonly requiered></v-text-field>
                    <v-date-picker v-model="dob" @input="$refs.date.save(dob)"></v-date-picker>
    
                </v-menu>
            </v-flex>
            <v-flex xs6 md3>
                <v-select :items="relations" v-model="relation" standard label="Relation to Primary Driver" :disabled="(relation == 'Self' || relation  == 'Spouse') ? true : false"></v-select>
            </v-flex>
        </v-layout>
        <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-select :items="IdTypes" v-model="idType" standard label="Form of ID"></v-select>
            </v-flex>
            <v-flex xs6 md3>
                <v-text-field v-model="idNumber" :counter="15" label="ID Number"></v-text-field>
            </v-flex>
        </v-layout>
    </v-form >
</template>

<script>
    export default {
        data: () => ({
            valid:true,
            gender: "",
            marritalStatus: "",
            occupation: "",
            date: false,
            dob: null,
            relation: "",
            idType: "Texas DL",
            idNumber: "",
            IdTypes: [
                "Texas DL",
                "Texas ID",
                "Out of State",
                "Passport",
                "Matricula",
                "International DL",
                "No ID"
            ],
            relations: [
                {text:"Sibling", value: "Sibling"},
                {text:"Parent", value: "Parent"},
                {text:"Child", value:"Child" },
                {text:"Other", value: "Other"},
                {text:"Self", value:"Self", disabled: true  },
                {text:"Spouse", value: "Spouse", disabled: true }
            ],
    
    
        }),
        props: ['driverRelation'],
        methods: {
            isMarried() {
                (this.relation == 'Self' ? Event.$emit('add-spouse') : null)
    
            }
            
        },
        created() {
    
            this.relation = this.driverRelation;
            Event.$on('get-drivers',()=> {
                let details= {gender: this.$data.gender, marritalStatus: this.$data.marritalStatus, occupation: this.$data.occupation, dob: this.$data.dob, relation: this.$data.relation, 
                idType: this.$data.idType, idNumber: this.$data.idNumber}
               
                this.$emit('details', details)
                
                
                
                })
    
        },
        beforeMount() {
            (this.relation == 'Spouse' ? this.marritalStatus = 'Married' : null)
        }
    
    
    };
</script>
