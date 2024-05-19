<template>
    <main>
      <aside>
        <FilterHeader />
        <Filter @update-filter="updateFilter"/>
      </aside>
      <TableSection :data="filteredData" />
    </main>
</template>

<script>
import Filter from './filter/Filter.vue';
import TableSection from './table/TableSection.vue';
import FilterHeader from './filter/FilterHeader.vue';

export default {
  components: { TableSection, Filter, FilterHeader },
  data() {
    return {
      data: [
        {id: 1, name: 'Powell Lang', date: '11/25/2023', time: '10:30 PM', status: 'IN', logDetails: 'APP', location: 'Pasig', company: 'Sprout Solutions'},
        {id: 2, name: 'Cassie Cooper', date: '07/13/2024', time: '05:26 PM', status: 'IN', logDetails: 'APP', location: 'Makati', company: 'McDollible'},
        {id: 3, name: 'Lambert Stevens', date: '01/15/2024', time: '05:16 PM', status: 'IN', logDetails: 'APP', location: 'Ortigas', company: 'Fantagio'},
        {id: 4, name: 'Franco Mcmillan', date: '12/30/2023', time: '01:29 PM', status: 'IN', logDetails: 'APP', location: 'Pasay', company: 'Sprout Solutions'},
        {id: 5, name: 'Elinor Terrell', date: '06/06/2024', time: '11:25 PM', status: 'IN', logDetails: 'APP', location: 'Pasig', company: 'Mcdollible'},
        {id: 6, name: 'Erika Dawson', date: '02/14/2024', time: '03:15 AM', status: 'IN', logDetails: 'APP', location: 'Makati', company: 'Mcdollible'},
        {id: 7, name: 'Connie Rosa', date: '04/01/2024', time: '09:06 AM', status: 'IN', logDetails: 'APP', location: 'Ortigas', company: 'Fantagio'},
        {id: 8, name: 'Velasquez Conley', date: '03/30/2024', time: '03:38 AM', status: 'IN', logDetails: 'APP', location: 'Pasay', company: 'Sprout Solutions'},
        {id: 9, name: 'Heidi Williamson', date: '06/09/2024', time: '12:06 PM', status: 'IN', logDetails: 'APP', location: 'Pasig', company: 'Sprout Solutions'},
        {id: 10, name: 'Selma Nielsen', date: '02/14/2024', time: '07:16 PM', status: 'IN', logDetails: 'APP', location: 'Makati', company: 'Sprout Solutions'},
      ],
      filteredData: []
    }
  },
  created() {
    this.filteredData = this.data;
  },
  methods: {
    updateFilter(filter) {
      this.filteredData = this.data.filter(item => {
        if (filter.company && item.company.toLowerCase().indexOf(filter.company.toLowerCase()) === -1) return false;
        if (filter.location && item.location.toLowerCase().indexOf(filter.location.toLowerCase()) === -1) return false;
        return true;
      });
    }
  }
}
</script>

<style>
aside {
  margin: 2rem;
}

@media (min-width: 1024px) {
  aside {
    max-width: 30%;
  }
}

</style>