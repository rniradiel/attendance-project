<template>
    <div class="search">
        <button class="active">
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
</template>

<style>
.search {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.search button {
  background: none;
  color: #C3CDC9;
  border: 1px solid #C3CDC9;
  border-radius: 4px;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 10px;
}

.search button.active {
  background: #17AD49;
  color: #fff;
}
</style>