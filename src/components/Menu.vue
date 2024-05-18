<script setup>
  import DateIcon from './icons/IconDate.vue'
</script>

<template>
  <div class="attendance">
    <h2>Manage Attendance</h2>
    <p>Attendance Manager is where you can generate, add, edit, and export the logs of the employees.</p>
    <div class="controls">
      <button class="btn-primary">
        <font-awesome-icon icon="fa-solid fa-calendar-week" />  
        Attendance Logs
      </button>
      <button class="btn-secondary">
        <font-awesome-icon icon="fa-solid fa-download" />
        Batch Add
      </button>
    </div>
    <hr>
    <div class="date">
        <h3>Date Range</h3>
        <input type="date">
        <input type="date">
    </div>
    <div class="filters">
        <div>
            <h3>Filter</h3>
            <a href="">Show All</a>
        </div>
        <ul>
            <li><a href=""><font-awesome-icon icon="fa-solid fa-building" /> Sprout Solutions</a></li>
            <li><a href=""><font-awesome-icon icon="fa-solid fa-users" />All</a></li>
            <li><a href=""><font-awesome-icon icon="fa-solid fa-location-dot" />All</a></li>
            <li>
              <a href="">
                <span>
                  <font-awesome-icon icon="fa-solid fa-user" />
                </span>
                All
              </a>
            </li>
        </ul>
    </div>
    <div class="search">
        <button>
          <span>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </span>
          Search
        </button>
        <button>
          <font-awesome-icon icon="fa-solid fa-download" />
          Export
        </button>
    </div>
  </div>
</template>

<style scoped>
.attendance {
  margin: 2rem;
}

.controls {
  display: flex;
  margin-bottom: 1rem;
}

.controls button {
  margin-left: 1rem;
}

.search {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.search input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.search select {
  padding: 0.5rem;
  border: 1px solid #ccc;
}

.btn-secondary {
  background-color: #ccc;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #999;
}

.btn-danger {
  background-color: #f44336;
  color: #fff;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #e53935;
}
</style>