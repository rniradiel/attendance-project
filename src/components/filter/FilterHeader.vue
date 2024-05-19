<template>
    <div class="title">
      <h2>Manage Attendance</h2>
      <p>Attendance Manager is where you can generate, add, edit, and export the logs of the employees.</p>
    </div>
    <div class="controls">
      <a href="#" class="active">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-calendar-week" />  
        </span>
        Attendance Logs
      </a>
      <a href="#" class="">
        <span class="icon">
          <font-awesome-icon icon="fa-solid fa-download" />
        </span>
        Exported Files
      </a>
    </div>
    <hr>
</template>

<style scoped>
.title p {
  font-size: 14px;
}

.controls {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.controls a {
  background-color: #FFF;
  color: #5A756B;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
}

.controls a.active {
  background: #E6FFEE;
  color: #2D4F43;
}

.controls a.active .icon {
 color: #17AD49;
}

hr {
  margin: 1rem 0;
}
</style>