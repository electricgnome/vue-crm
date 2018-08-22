<template>
<v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title class="white--text">Kappa Insurance</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn flat to="/">Main</v-btn>
        <v-btn flat to="/newcustomer">Add Customer</v-btn>
        <v-btn flat to="/tasks">Tasks</v-btn>
        <v-btn flat to="/logout">Logout</v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>
