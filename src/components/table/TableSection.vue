<template>
    <div class="table">
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
                  <td :class="{ 'in-status': item.status === 'IN', 'out-status': item.status === 'OUT' }">{{ item.status }}</td>
                  <td> <span :class="{ 'app-logDetails': item.logDetails === 'APP'}">{{ item.logDetails }}</span></td>
                  <td>{{ item.location }}</td>
                  <td>{{ item.company }}</td>
              </tr>
          </tbody>
      </table>
      <div class="table-indicator">
        <div class="items-page">
          <p>Items per page</p>
          <select>
            <option value="10">10</option>
          </select>
        </div>
        <div>
          <p>{{ itemsPerPage }}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: String,
    }
  },
  computed: {
    filteredData() {
      return this.data;
    }
  }
}
</script>

<style scoped>
.table {
  border: 1px solid #C3CDC9;
}

table {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

th {
  text-transform: uppercase;
  font-weight: 500;
}

th,
td {
  border-bottom: 1px solid #C3CDC9;
  padding: 10px;
  text-align: left;
  font-weight: 500;
}

.table-indicator {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
}

.table-indicator .items-page {
  display: inline-flex;
  gap: 4px;
}

.table-indicator .items-page select {
  border: 1px solid #A5B3AF;
  border-radius: 4px;
  color: #00291b;
}

.in-status {
  color: #0F6EEB;
}

.out-status {
  color: #FF7F00;
}

.app-logDetails {
  background-color: #C3CDC9;
  color: #3C5B51;
  padding: 0 4px;
  border-radius: 4px;
  font-weight: 500;
}

</style>