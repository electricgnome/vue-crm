<template>
  <v-app>
    <Tabs/>
  </v-app >
</template>
  
<script>
import Tabs from './components/Tabs'


export default {
  name: 'App',
  components: {
    Tabs
  }
 
}
</script>

<style lang="scss">

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-image: url("http://www.electricgnome.com/codiad/workspace/Kappa/image/polonez_car.png");
}

</style>
