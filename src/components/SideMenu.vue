<template>
  <div class="side-menu">
    <MenuHeader />
    <hr>
    <MenuControls />
    <MenuDate />
    <MenuFilter />
    <hr>
    <MenuButtons />
  </div>
</template>

<script setup>
import MenuHeader from './MenuHeader.vue';
import MenuControls from './MenuControls.vue';
import MenuDate from './MenuDate.vue';
import MenuFilter from './MenuFilter.vue';
import MenuButtons from './MenuButtons.vue';
</script>

<style scoped>
.side-menu {
  margin: 2rem;
}

@media (min-width: 1024px) {
  .side-menu {
    max-width: 30%;
  }
}

hr {
  margin: 1rem 0;
}
</style>