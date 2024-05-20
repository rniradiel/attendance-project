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
                  <td>{{ item.status }}</td>
                  <td>{{ item.logDetails }}</td>
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
          <p>Showing 1 - 10 of 10</p>
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

</style>