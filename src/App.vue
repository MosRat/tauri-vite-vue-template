<script setup lang="ts">

import TitleBar from "@cp/TitleBar.vue";


</script>

<template>
  <TitleBar>
  </TitleBar>
  <div class="main-container">
    <router-view/>
  </div>
</template>

<style scoped>
.main-container {
  padding-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
