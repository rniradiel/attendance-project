<template>
    <main>
      <aside>
        <FilterHeader />
        <Filter @update-filter="updateFilter"/>
      </aside>
      <div class="table-content">
        <LogHeader :dateRangeTitle="dateRangeTitle" />
        <TableSection :data="filteredData" />
      </div>
    </main>
</template>

<script>
import Filter from './filter/Filter.vue';
import TableSection from './table/TableSection.vue';
import FilterHeader from './filter/FilterHeader.vue';
import LogHeader from './table/LogHeader.vue';

export default {
  components: { TableSection, Filter, FilterHeader, LogHeader },
  data() {
    return {
      data: [
        {id: 1, name: 'Powell Lang', date: '11/25/2023', time: '10:30 PM', status: 'IN', logDetails: 'APP', location: 'Pasig', company: 'Sprout Solutions', departmert: 'IT'},
        {id: 2, name: 'Cassie Cooper', date: '07/13/2024', time: '05:26 PM', status: 'IN', logDetails: 'APP', location: 'Makati', company: 'McDollible', departmert: 'Product'},
        {id: 3, name: 'Lambert Stevens', date: '01/15/2024', time: '05:16 PM', status: 'IN', logDetails: 'APP', location: 'Ortigas', company: 'Fantagio', departmert: 'Engineering'},
        {id: 4, name: 'Franco Mcmillan', date: '12/30/2023', time: '01:29 PM', status: 'IN', logDetails: 'APP', location: 'Pasay', company: 'Sprout Solutions', departmert: 'Engineering'},
        {id: 5, name: 'Elinor Terrell', date: '06/06/2024', time: '11:25 PM', status: 'IN', logDetails: 'APP', location: 'Pasig', company: 'Mcdollible', departmert: 'Product'},
        {id: 6, name: 'Erika Dawson', date: '02/14/2024', time: '03:15 AM', status: 'IN', logDetails: 'APP', location: 'Makati', company: 'Mcdollible', departmert: 'Product'},
        {id: 7, name: 'Connie Rosa', date: '04/01/2024', time: '09:06 AM', status: 'IN', logDetails: 'APP', location: 'Ortigas', company: 'Fantagio', departmert: 'IT'},
        {id: 8, name: 'Velasquez Conley', date: '03/30/2024', time: '03:38 AM', status: 'IN', logDetails: 'APP', location: 'Pasay', company: 'Sprout Solutions', departmert: 'IT'},
        {id: 9, name: 'Heidi Williamson', date: '06/09/2024', time: '12:06 PM', status: 'IN', logDetails: 'APP', location: 'Pasig', company: 'Sprout Solutions', departmert: 'Engineering'},
        {id: 10, name: 'Selma Nielsen', date: '02/14/2024', time: '07:16 PM', status: 'IN', logDetails: 'APP', location: 'Makati', company: 'Sprout Solutions', departmert: 'Engineering'},
      ],
      filteredData: [],
    }
  },
  computed: {
    dateRangeTitle() {
      if (this.filteredData.length === 0) {
        return 'Date Range';
      }

      const startDate = new Date(this.filteredData[0].date);
      const endDate = new Date(this.filteredData[this.filteredData.length - 1].date);

      return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    }
  },
  created() {
    this.filteredData = this.data;
  },
  methods: {
    updateFilter(filter) {
      this.filteredData = this.data.filter(item => {
        if (filter.company && item.company.toLowerCase().indexOf(filter.company.toLowerCase()) === -1) return false;
        if (filter.departmert && item.departmert.toLowerCase().indexOf(filter.departmert.toLowerCase()) === -1) return false;
        if (filter.location && item.location.toLowerCase().indexOf(filter.location.toLowerCase()) === -1) return false;
        if (filter.startDate && new Date(item.date) < new Date(filter.startDate)) return false;
        if (filter.endDate && new Date(item.date) > new Date(filter.endDate)) return false;
        return true;
      });
    }
  },
}
</script>

<style>
main {
  margin: 2rem;
}

@media (min-width: 1024px) {
  aside {
    max-width: 30%;
    margin-right: 2rem;
  }
}

.table-content {
  width: 100%
}

.log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.log-header h2 {
    font-size: 16px;
}

.log-header .icon {
    color: #17AD49;
}

</style>