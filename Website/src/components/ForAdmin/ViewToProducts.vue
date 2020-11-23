<template>
  <div class="viewToProducts-container">
        <!-- id: 1, name: 'Vacheron Constantin', price: 23500, quantity: '53', type: 'Машки Часовник', img: require('../../assets/carouselWomenAndMen3.png') -->
    <table class="table">
      <thead class="thead-container">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Име</th>
          <th scope="col">Цена</th>
          <th scope="col">Количина</th>
          <th scope="col">Тип</th>
          <th scope="col">Слика</th>
          <th scope="col">Едитирај</th>
        </tr>
      </thead>
      <tbody class="tbody-container">
        <tr v-for="(product, index) in products" :key="index">
          <th scope="row">1</th>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.type }}</td>
          <td><img :src="product.img" alt="watch"></td>
          <td><button @click="editProducts(product)" class="btn btn-secondary">Едитирај</button></td>
        </tr>
      </tbody>
    </table>
	</div>
</template>

<script>
export default {
  name: 'ViewToProducts',
  data() {
    return {}
  },
  methods: {
    editProducts(product) {
      console.log('index', product.id)
      this.$router.push(`/adminhome/update-product/${product.id}`)
    },
  },
  computed: {
    products() {
        return this.$store.getters.getWatches
    },
  }
}
</script>