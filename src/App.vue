<template>
  <div id="app">
    <main-bar></main-bar>
    <keep-alive include="Room">
      <router-view></router-view>
    </keep-alive>
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
