<template>
  <div class="table-content">
    <LogHeader />
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>In/Out</th>
                <th>Log Details</th>
                <th>Location</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filteredData" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.logDetails }}</td>
                <td>{{ item.location }}</td>
                <td>{{ item.company }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import LogHeader from './LogHeader.vue';
export default {
  components: {LogHeader},
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    filteredData() {
      return this.data;
    }
  }
}
</script>
