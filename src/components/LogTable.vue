<template>
  <DataTable :columns="columns" ajax="/data.json" class="display" width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Extn.</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import Select from 'datatables.net-select';
 
DataTable.use(Select);

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
];
</script>
  
<style>
@import 'datatables.net-dt';
</style>