<template>
  <div class="enterwatch-container">
    <form @submit="enterProduct(e)">
      <div class="form-group">
        <label for="inputBrand">Бренд</label>
        <input type="text" v-model="watch.name" class="form-control" id="inputBrand" placeholder="Бренд" required>
        
        <label for="inputPrice">Цена</label>
        <input type="number" v-model="watch.price" class="form-control" id="inputPrice" placeholder="Цена" required>

        <label for="inputQuantity">Количина</label>
        <input type="number" v-model="watch.quantity" class="form-control" id="inputQuantity" placeholder="Количина" required>

        <label>Тип</label>
        <select id="inputType" v-model="watch.type" class="form-control" required>
          <option>Man</option>
          <option>Woman</option>
          <option>Smart</option>
        </select>
      
        <label>Опис:</label>
          <div class="dial-container">
            <label for="description">Главен Опис</label>
            <input type="text" v-model="watch.description.desc" class="form-control" id="description" placeholder="Опис" required>
          </div>

        <label>Dial:</label>
          <div class="dial-container">
            <label for="description">Форма</label>
            <input type="text" v-model="watch.description.dial.shape" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">movementType</label>
            <input type="text" v-model="watch.description.dial.movementType" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">Диспеј Тип</label>
            <input type="text" v-model="watch.description.dial.displayType" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">Боја на стрелки</label>
            <input type="text" v-model="watch.description.dial.pointerColor" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">Dial Color</label>
            <input type="text" v-model="watch.description.dial.dialColor" class="form-control" id="description" placeholder="Опис" required>
          </div>

          <label>Band:</label>W
          <div class="dial-container">
            <label for="description">Материјал</label>
            <input type="text" v-model="watch.description.band.material" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">claspType</label>
            <input type="text" v-model="watch.description.band.claspType" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">bandColor</label>
            <input type="text" v-model="watch.description.band.bandColor" class="form-control" id="description" placeholder="Опис" required>
          </div>

          <label>Часовник:</label>
          <div class="dial-container">
            <label for="description">length</label>
            <input type="text" v-model="watch.description.watch.length" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">dialDiameter</label>
            <input type="text" v-model="watch.description.watch.dialDiameter" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">dialThickness</label>
            <input type="text" v-model="watch.description.watch.dialThickness" class="form-control" id="description" placeholder="Опис" required>
            <label for="description">weight</label>
            <input type="text" v-model="watch.description.watch.weight" class="form-control" id="description" placeholder="Опис" required>
          </div>
      </div>

        <div class="form-group mb-5">
          <label for="files">Главна Слика</label>
          <input type="file" @change="onFileChange" class="form-control-file" id="files" multiple>
          <img :src="watch.photo" />
        </div>

        <div class="form-group mb-5">
          <label for="files">Модел Слики</label>
          <input type="file" @change="onFileChange" class="form-control-file" id="files" multiple>
          <img :src="watch.photo" />
        </div>

        <div class="form-group mb-5">
          <label for="files">Desc Слика</label>
          <input type="file" @change="onFileChange" class="form-control-file" id="files" multiple>
          <img :src="watch.photo" />
        </div>


      <button type="submit" class="btn btn-primary">Vnesi</button>
    </form>
	</div>
</template>

<script>
export default {
  name: 'EnterProduct',
  data() {
    return {
      watch: {
        photo: '',
        name: '',
        price: void 0,
        quantity: void 0,
        type: '',
        description: {
          desc: '',
          dial: {
              shape: '',
              movementType: '',
              displayType: '',
              pointerColor: '',
              dialColor: ''
          },
          band: {
              material: '',
              claspType: '',
              bandColor: '',
          },
          watch: {
              length: '',
              dialDiameter: '',
              dialThickness: '',
              weight: '',
          }
      },
        mainImg: '',
        optionsImgs: [
            {
                quantity: void 0,
                img: '',
                color: ''
            }
        ],
        descImgs: ''
      }
    }
  },
  methods: {
    enterProduct() {
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
        vm.watch.photo = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function () {
      this.watch.photo = '';
    }
  }
}
</script>