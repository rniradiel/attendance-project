<template>
    <div class="date">
        <h3 class="title">Date Range</h3>
        <div class="form-input">
            <label for="">Date From</label>
            <input type="date" class="input-date">
        </div>
        <div class="form-input">
            <label for="">Date To</label>
            <input type="date" class="input-date">
        </div>
    </div>
</template>

<style>
.date {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.date .title {
    font-size: 14px;
    text-transform: uppercase;
    color: #3C5B51;
    margin-bottom: 1rem;
}

.form-input {
  position: relative;
  margin-bottom: 1rem;
}

.form-input label {
  position: absolute;
  top: -10px;
  left: 10px;
  font-size: 12px;
  color: #879A94;
  background: #fff;
}

.form-input input {
  width: 100%;
}

</style>