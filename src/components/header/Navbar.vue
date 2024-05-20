<template>
      <li v-for="(item, index) in navbarItems" :key="index" class="dropdown">
        <a :href="`#${item.toLowerCase()}`">
            {{ item }} 
            <span>
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </span>
        </a>
        <ul class="dropdown-content">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Menu</a></li>
        </ul>
      </li>
</template>

<script>
export default {
  data() {
    return {
      navbarItems: ["My Requests", "My Team", "Company Administration", "Tools", "Maintenance"]
    }
  }
};
</script>

<style scoped>
li {
    margin-right: 1rem;
}

li a {
  color: #fff;
  text-decoration: none;
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