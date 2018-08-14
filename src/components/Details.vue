<template>
<v-form >
    <v-container>
        <v-layout justify-center row>
            <v-flex xs3>
                <v-radio-group v-model="gender" :mandatory="false">
                    <v-radio label="Male" value="Male"></v-radio>
                    <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>
            </v-flex>
            <v-flex xs3>
                <v-radio-group v-model="marritalStatus" :mandatory="false">
                    <v-radio label="Single" value="Single"></v-radio>
                    <v-radio label="Married" value="Married"></v-radio>
                </v-radio-group>
            </v-flex>
        </v-layout>
        <v-layout justify-center row>
            <v-flex xs6>
                <v-text-field v-model="occupation" label="Occupation"></v-text-field>
            </v-flex>
        </v-layout>
         <v-layout justify-center row>
            <v-flex xs3>
              <v-menu
                ref="dob"
                :close-on-content-click="false"
                v-model="dob"
                :nudge-right="40"
                :return-value.sync="date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
              <v-text-field
                slot="activator"
                v-model="date"
                label="Date of Birth"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date" @input="$refs.dob.save(date)"></v-date-picker>

              </v-menu>
            </v-flex>
            <v-flex xs3>
              <v-select :items="relations" v-model="relation" standard label="Relation to Primary Driver"></v-select>
            </v-flex>
         </v-layout>
        <v-layout justify-center row>
            <v-flex xs3>
                <v-select :items="IdTypes" v-model="idType" standard label="Form of ID"></v-select>
            </v-flex>
            <v-flex xs3>
                <v-text-field v-model="IDNumber" :counter="15" label="ID Number"></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</v-form>
</template>

<script>
export default {
  data: () => ({
      gender: "",
      marritalStatus:"",
      occupation:"",
      dob:false,
      date:null,
      relation:"Self",
      idType: "Texas DL",    
      IDNumber:"",
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
      "Spouse/Common law",
      "Sibling",
      "Parent",
      "Child",
      "Other"
    ],
  
  })
};
</script>
