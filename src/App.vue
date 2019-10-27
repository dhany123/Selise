<template>
  <div id="app">
    <app-selise/>
  </div>
</template>

<script>
import AppSelise from './views/AppSelise.vue'

export default {
  name: 'app',
  components: {
    'app-selise' : AppSelise
  }
}
</script>

<style>
#app {
  color: white;
  font-family:'Montserrat', sans-serif;
}
</style>
