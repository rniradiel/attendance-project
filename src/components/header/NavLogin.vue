<template>
    <li class="dropdown">
            <span class="login-icon">
              <font-awesome-icon icon="fa-solid fa-user" />
            </span>
          <button class="dropbtn" @click="toggleDropdown">
                Admin    
            <span>
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </span>
          </button>
          <ul class="dropdown-content" v-if="show">
            <li><a href="#">Account</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
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

.login-icon {
    margin-right: 0.5rem;
}

.dropbtn {
  padding: 8px;
  background: none;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>