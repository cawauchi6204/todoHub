<template>
  <div>
    <table>
      <thead>
        <tr>
          <th id="prev">&laquo;</th>
          <th id="title" class="txt-center" colspan="5">2020/05</th>
          <th id="next">&raquo;</th>
        </tr>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 2px solid #eee;
}

.txt-center {
  text-align: center;
}

thead,
tfoot {
  background: #eee;
}

th,
td {
  padding: 8px;
  text-align: center;
  border: 1px solid #eee;
  background: white;
}

tbody tr td {
  border: white solid 10px;
  border-radius: 50%;
}

td {
  height: 50px;
  width: auto;
  border-radius: 10px;
  background-color: #ebedf0;
}
</style>
