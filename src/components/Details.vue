<template>
<v-form v-model="valid">
    <v-container>
        <v-layout justify-center row>
            <v-flex xs3>
                <v-radio-group v-model="radios" :mandatory="false">
                    <v-radio label="Male" value="Male"></v-radio>
                    <v-radio label="Female" value="Female"></v-radio>
                </v-radio-group>
            </v-flex>
            <v-flex xs3>
                <v-radio-group v-model="radios" :mandatory="false">
                    <v-radio label="Single" value="Single"></v-radio>
                    <v-radio label="Married" value="Married"></v-radio>
                </v-radio-group>
            </v-flex>
        </v-layout>
        <v-layout justify-center row>
            <v-flex xs6>
                <v-text-field v-model="Occupation" label="Occupation"></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout justify-center row>
            <v-flex xs3>
                <v-select :items="items" standard label="Form of ID"></v-select>
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
        items: ['Texas DL', 'Texas ID', 'Out of State', 'Passport', 'Matricula', 'International DL', 'No ID']
    })
};
</script>
