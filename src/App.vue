<template>
  <v-app>
    <Tabs/>
    <Names/>
    <Contact/>
  </v-app >
</template>
  
<script>
import Tabs from './components/Tabs'
import Names from './components/Names'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    Tabs,
    Names,
    Contact
  }
 
}
</script>

