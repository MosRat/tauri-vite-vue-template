<script setup lang="ts">

import TitleBar from "@cp/TitleBar.vue";
</script>

<template>
  <TitleBar>
    Example
  </TitleBar>
  <div class="main-container">
    <router-view/>
  </div>
</template>

<style scoped>
.main-container {
  margin-top: 5vh;
}

</style>
