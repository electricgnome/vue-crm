<template>
    <v-container>
        <v-layout justify-center row>
            <v-flex xs6 md3>
                <v-radio-group v-model="gender" :mandatory="false">
                    <v-radio label="Male" value="Male" color="primary"></v-radio>
                    <v-radio label="Female" value="Female" color="primary"></v-radio>
                </v-radio-group>
            </v-flex>
            <v-flex xs6 md3>
                <v-radio-group v-model="marritalStatus" :mandatory="false">
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
                <v-text-field v-model="IDNumber" :counter="15" label="ID Number"></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            gender: "",
            marritalStatus: "",
            occupation: "",
            date: false,
            dob: null,
            relation: "",
            idType: "Texas DL",
            IDNumber: "",
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
                "Self",
                "Spouse",
                "Sibling",
                "Parent",
                "Child",
                "Other"
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
    
        },
        beforeMount() {
            (this.relation == 'Spouse' ? this.marritalStatus = 'Married' : null)
        }
    
    
    };
</script>
