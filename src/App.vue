<template>
<v-app>
    <NavBar />
    <!-- <Login/> -->
    <router-view></router-view>
</v-app>
</template>

  

<script>
import NavBar from "./components/NavBar";
import Login from "./components/Login";

export default {
    name: "App",
    components: {
        NavBar,
        Login,
    }
};
</script>
