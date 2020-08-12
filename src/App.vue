<template>
  <div id="app">
    <main-bar></main-bar>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
<script>
import MainBar from "@/components/MainBar";
export default {
  components: {MainBar}
}
</script>