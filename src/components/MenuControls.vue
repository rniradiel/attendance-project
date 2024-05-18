<template>
    <div class="controls">
      <a href="#" class="active">
        <font-awesome-icon icon="fa-solid fa-calendar-week" />  
        Attendance Logs
      </a>
      <a href="#" class="">
        <font-awesome-icon icon="fa-solid fa-download" />
        Exported Files
      </a>
    </div>
</template>

<style>
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
}

.controls a.active {
  background: #E6FFEE;
}


</style>