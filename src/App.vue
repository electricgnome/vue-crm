<template>
  <v-app>
    <Tabs/>
    <Names/>
    <Contact/>
    <Details/>
  </v-app >
</template>
  
<script>
import Tabs from "./components/Tabs";
import Names from "./components/Names";
import Contact from "./components/Contact";
import Details from "./components/Details";


export default {
  name: "App",
  components: {
    Tabs,
    Names,
    Contact,
    Details
  }
};
</script>

