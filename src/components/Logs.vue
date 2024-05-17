<template>
    <div class="attendance">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee</th>
            <th>Status</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Hours Worked</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-03-29</td>
            <td>John Doe</td>
            <td>Present</td>
            <td>9:00 AM</td>
            <td>5:00 PM</td>
            <td>8 hours</td>
            <td>
              <button class="btn-secondary">Edit</button>
              <button class="btn-danger">Delete</button>
            </td>
          </tr>
          <!-- Add more attendance records here -->
        </tbody>
      </table>
    </div>
  </template>
  
<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #f2f2f2;
}

</style>