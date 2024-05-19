<template>
    <form @submit.prevent="applyFilter">
      <FilterDate />
      <div class="filters">
        <div class="filter-header">
          <h3 class="title">Filter</h3>
          <a href="#">Hide All</a>
        </div>
  
        <div class="form-input">
          <label for="company">Company:</label>
          <input type="text" id="company" v-model="filter.company" />
        </div>
        <div class="form-input">
          <label for="department">Department:</label>
          <input type="text" id="department" v-model="filter.department" />
        </div>
        <div class="form-input">
          <label for="location">Location:</label>
          <input type="text" id="location" v-model="filter.location" />
        </div>
        <div class="form-input">
          <label for="employee">Employee:</label>
          <input type="text" id="employee" v-model="filter.employee" />
        </div>
        <hr />
        <div class="search">
          <button type="submit" class="button-primary">
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </span>
            Search
          </button>
          <button class="button-disabled">
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-download" />
            </span>
            Export
          </button>
        </div>
      </div>
    </form>
</template>
  
<script>
  import FilterDate from './FilterDate.vue';
  
  export default {
    components: { FilterDate },
    data() {
      return {
        filter: {
          company: '',
          department: '',
          location: '',
          employee: '',
        },
      };
    },
    methods: {
      applyFilter() {
        this.$emit('update-filter', this.filter);
      },
    },
  };
</script>

<style scoped>
.filter-header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.filter-header .title {
    font-size: 14px;
    text-transform: uppercase;
    color: #3C5B51;
    margin-bottom: 1rem;
}

.filter-header a {
    font-weight: 500;
}

hr {
  margin: 1rem 0;
}

.search {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.search button {
  background: none;
  border-radius: 4px;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 10px;
}

.search .button-primary {
  background: #17AD49;
  border: 1px solid #17AD49;
  color: #fff;
}

.search .button-disabled {
  color: #C3CDC9;
  border: 1px solid #C3CDC9;
}

</style>