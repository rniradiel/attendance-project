<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <nav>
      <ul>
        <li><a href="#">My Requests</a></li>
        <li><a href="#">My Team</a></li>
        <li><a href="#">Company Administration</a></li>
        <li><a href="#">Tools</a></li>
        <li><a href="#">Maintenance</a></li>
        <li>
            <input type="text" placeholder="Search Employee...">
            <button></button>
        </li>
        <li class="dropdown">
          <button class="dropbtn" @click="toggleDropdown">Dropdown</button>
          <ul class="dropdown-content" v-if="show">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.show = !this.show;
    },
  },
};
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
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content li {
  margin-bottom: 10px;
}

.dropdown-content a {
  color: #000;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>