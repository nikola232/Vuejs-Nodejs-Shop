<template>
    <div>
        <table class="table table-orders">
            <thead class="thead-container">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Име</th>
                <th scope="col">Презиме</th>
                <th scope="col">Телефон</th>
                <th scope="col">Емаил</th>
                <th scope="col">Град/Село</th>
                <th scope="col">Адреса на живеење</th>
                <th scope="col">Дата</th>
                <th scope="col">Производ</th>
                </tr>
            </thead>
            <tbody class="tbody-container">
                <tr>
                    <th scope="row">1</th>
                    <td>Nikola</td>
                    <td>Gjorgjiovski</td>
                    <td>075 555 555</td>
                    <td>nikola@hotmail.com</td>
                    <td>Bitola</td>
                    <td>Beverly Hills</td>
                    <td>{{date}}</td>
                    <td>1sd3as54d351</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Orders',
  data() {
      return {
        date: new Date().toDateString()
      }
  }
}
</script>
<style>
.table-orders{ 
    /* color: #fff !important; */
}
.thead-container {
    background-color: #23282e;
    color: #ffffff;
}
.tbody-container {
    margin-top: 20px;
    background-color: #2e353d;
    color: #ffffff;
}
.table th, .table td {
    border-top: 1px solid #23282e;
}
.table thead th {
    border: none;
}
</style>