<template>
  <header class="header">
    <NavLogo />
    <nav>
      <ul>
        <Navbar />
        <NavSearch />
        <NavLogin />
      </ul>
    </nav>
  </header>
</template>

<script setup>
import NavLogo from './NavLogo.vue'
import NavSearch from './NavSearch.vue';
import Navbar from './Navbar.vue';
import NavLogin from './NavLogin.vue';
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 1rem;
  position: relative;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>