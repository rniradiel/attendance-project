<template>
    <form @submit.prevent="applyFilter">
      <div class="date">
          <h3 class="title">Date Range</h3>
          <div class="form-input">
              <label for="startDate">Date From</label>
              <input type="date" id="startDate" v-model="filter.startDate">
          </div>
          <div class="form-input">
              <label for="endDate">Date To</label>
              <input type="date" id="endDate" v-model="filter.endDate">
          </div>
      </div>
      <div class="filters">
        <div class="filter-header">
          <h3 class="title">Filters</h3>
          <button @click="toggleFilter">{{ buttonText }}</button>
        </div>
        <HideFilter v-if="currentComponent === 'HideFilter'" />
        <div v-else>
          <div class="form-input">
            <label for="company">Company</label>
            <input type="text" id="company" v-model="filter.company" />
          </div>
          <div class="form-input">
            <label for="department">Department</label>
            <input type="text" id="department" v-model="filter.department" />
          </div>
          <div class="form-input">
            <label for="location">Location</label>
            <input type="text" id="location" v-model="filter.location" />
          </div>
          <div class="form-input">
            <label for="employee">Employee</label>
            <input type="text" id="employee" v-model="filter.employee" />
          </div>
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
  import HideFilter from './HideFilter.vue';
  
  export default {
    components: { FilterDate, HideFilter },
    data() {
      return {
        filter: {
          company: '',
          department: '',
          location: '',
          employee: '',
          startDate: '',
          endDate: '',
        },
        currentComponent: 'HideFilter',
        buttonText: 'Show All',
      };
    },
    methods: {
      applyFilter() {
        this.$emit('update-filter', this.filter);
      },
      toggleFilter() {
        if (this.currentComponent === 'HideFilter') {
          this.currentComponent = 'div';
          this.buttonText = 'Hide All';
          console.log('Click Show')
        } else {
          this.currentComponent = 'HideFilter';
          this.buttonText = 'Show All';
        }
      },
    },
  };
</script>

<style scoped>
.filter-header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 1rem;
}

.filter-header .title {
    font-size: 14px;
    text-transform: uppercase;
    color: #3C5B51;
}

.filter-header button {
    font-weight: 500;
    border: none;
    color: #0F6EEB;
}

hr {
  margin: 1rem 0;
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