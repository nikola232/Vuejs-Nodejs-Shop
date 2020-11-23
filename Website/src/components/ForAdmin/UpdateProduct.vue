<template>
  <div class="enterwatch-container">
    <form @submit="updateProduct(e)">
      <div class="form-group" >
        <label for="inputBrand">Бренд</label>
        <input type="text" v-model="watch.name" class="form-control" id="inputBrand" required>
        
        <label for="inputPrice">Цена</label>
        <input type="number" v-model="watch.price" class="form-control" id="inputPrice" required>

        <label for="inputQuantity">Количина</label>
        <input type="number" v-model="watch.quantity" class="form-control" id="inputQuantity" required>

        <label>Тип</label>
        <select id="inputType" v-model="watch.type" class="form-control" text="sss" required>
          <option>Женски Часовник</option>
          <option>Машки Часовник</option>
          <option>Смарт Часовник</option>
        </select>
      </div>

        <div class="form-group mb-5">
          <label for="files">Внеси Слика</label>
          <input type="file" @change="onFileChange" class="form-control-file" id="files" multiple>
          <img :src="getProduct.img" />
        </div>


      <button type="submit" class="btn btn-primary">Vnesi</button>
    </form>
	</div>
</template>

<script>
export default {
  name: 'UpdateProduct',
  data() {
    return {
      productId: this.$route.params.id,
      watch: {
        img: '',
        name: '',
        price: void 0,
        quantity: void 0,
        type: '',
      }
    }
  },
  methods: {
    updateProduct() {
      console.log(this.watch)
      this.$store.dispatch('setWatch', { watch: this.watch })
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = (e) => {
        vm.watch.img = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.watch.img = '';
    }
  },
  computed: {
    getProduct() {
      // '+' conver to number
      return this.$store.getters.getWatches.find(w => w.id === +this.productId)
    }
  },
  mounted() {
    this.watch.name = this.getProduct.name
    this.watch.img = this.getProduct.img
    this.watch.price = this.getProduct.price
    this.watch.quantity = this.getProduct.quantity
    this.watch.type = this.getProduct.type
    console.log(this.getProduct)

  }
}
</script>