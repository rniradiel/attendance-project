<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <nav>
      <ul>
        <Navbar />
        <li>
            <SearchBar />
        </li>
        <NavLogin />
      </ul>
    </nav>
  </header>
</template>

<script setup>
import SearchBar from './SearchBar.vue';
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

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 2rem;
  margin-right: 1rem;
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