<template>
  <div>
    <div class="icon-brand">
      <button class="btn btn-outline-custom mr-2" type="submit"><i class="fas fa-store-alt"></i></button>
      <a class="navbar-brand" href="/">Меркатор МК</a>
    </div>
    <div class="container-product">
      <div class="lineUnderNavbar">
      <router-link to="/" class="homeBtn">
          <i class="fas fa-home"></i>
          <p class="homeTitle mt-2 ml-2 mr-3">Home</p>
      </router-link>
      <i class="fas fa-chevron-right"></i>
      <router-link to="/shop" class="homeBtn">
        <p class="shopTitle mt-2 ml-3 mr-3">Shop</p>
      </router-link>
      <i class="fas fa-chevron-right "></i>
      <p class="shopTitle mt-2 ml-3">Product - {{ getWatch.name }}</p>
    </div>
    <p v-show="this.notSelectedToWishList">Селектирајте модел</p>
      <div class="row">
        <div class="col-4">
          <div class="preview">
            <div class="preview-pic tab-content">
              <!-- in class 'active'  -->
              <div class="tab-pane" :id="`pic-${index+1}`" v-for="(img, index) in getOptionsImgs" :key="index">
                <img :src='img.img' />
              </div>
              <div>
                <img v-show="!order.color" :src="getDescImgs" alt="">
              </div>
            </div>
          </div>  
        </div>
        <div class="col-1"></div>
        <div class="col-7 description-container">
          <div class="price-container">
            <p class="brand-title">Бренд:</p>
            <h1 class="brand-watch">{{ getWatch.name }}</h1>
            <p>Тип:</p>
            <p class="type-watch">{{ getWatch.type }}</p>
            <h3 class="price-watch">Цена: {{ order.quantity * getWatch.price }} ден</h3>
          </div>
          <div class="quantity-container">
            <p>Количина: </p>
            <div class="def-number-input number-input safari_only">
              <button @click="onMinusClick()" :disabled="order.quantity === 1" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
              <input class="quantity" min="0" name="quantity" :value="order.quantity" type="number">
              <button @click="onPlusClick()" :disabled="order.quantity === this.quantityOption" onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
            </div>
          </div>
          <div class="preview-pic tab-content">
            <p>Модел: {{this.order.color}}</p>
            <ul class="preview-thumbnail nav nav-tabs select-watch-container">
              <li v-for="(img, index) in getOptionsImgs" :key="index" :class="img.quantity === 0 ? 'display-img-option' : ''">
                <a :data-target="img.quantity === 0 ? '' : `#pic-${index+1}`" data-toggle="tab">
                  <img :src='img.img' @click="shooseColor(img)"  :class="img.color === order.color ? 'redddd' : ''"/>
                </a>
              </li>
            </ul>
          </div>
          <div class="buttons-container">
            <button type="button" class="btn order-btn mr-3" @click="orderProduct()">Нарачај</button>
            <button type="button" class="btn wish-list-btn" @click="addToWishList()"><i class="fa fa-heart" aria-hidden="true"></i> Листа на желби</button>
          </div>
        </div>
      </div>
      <div class="row2">
        <div class="text">
          <h3 class="mb-4">Features and specifications:</h3>
          <p>{{ getWatchDesc.desc }}</p>
          <p>Dial</p>
          <p>- Shape: {{getWatchDesc.dial.shape }}</p>
          <p>- Movement type: {{ getWatchDesc.dial.movementType }}</p>
          <p>- Display type: {{ getWatchDesc.dial.displayType }}</p>
          <p>- Pointer color: {{ getWatchDesc.dial.pointerColor }}</p>
          <p>- Dial color: {{ getWatchDesc.dial.dialColor }}</p>

          <p>Band</p>
          <p>- Material: {{ getWatchDesc.band.material }}</p>
          <p>- Clasp type: {{ getWatchDesc.band.claspType }}</p>
          <p>- Band color: {{ getWatchDesc.band.bandColor }}</p>

          <p>Watch</p>
          <p>- Length: {{ getWatchDesc.watch.length }}</p>
          <p>- Dial diameter: {{ getWatchDesc.watch.dialDiameter }}</p>
          <p>- Dial thickness: {{ getWatchDesc.watch.dialThickness }}</p>
          <p>- Weight: {{ getWatchDesc.watch.weight }}</p>
        </div>
        <img v-for="(img, index) in getDescImgs" :key="index" class="img-desc" :src='img' />
      </div>
      <div class="row3">
        <p class="title">You May Also Like</p>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_3.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_2.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_1.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_2.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_1.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_3.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_2.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_3.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
                <div class="card">
                  <img class="card-img-top" src="@/assets/FroProductPage/curren-watch1/Screenshot_1.png" alt="Card image cap">
                  <div class="card-body">
                    <p class="card-title text-center"><small class="text-muted">Машки Часовник</small></p>
                    <h5 class="card-title text-center">Curren</h5>
                    <div class="d-flex justify-content-center">
                      <p class="price-product mr-3 mt-1">1200 ден</p>
                      <strike class="mt-2">1500 ден</strike>
                    </div>
                    <button type="button" class="btn order-btn-card">Повеќе</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <Footer ref="Footer" />
  </div>
</template>

<script>
import Footer from '../HomePage/Footer.vue'

export default {
  name: 'Product',
  data() {
    return {
      price: 1200,
      quantityOption: 0,
      notSelectedToWishList: false,
      order: {
        quantity: 1,
        color: ''
      },
      projetId: this.$route.params.id
    }
  },
  components: {
    Footer,
  },
  methods: {
    onMinusClick() {
      this.order.quantity --
    },
    onPlusClick() {
      this.order.quantity ++
    },
    orderProduct() {
      if (this.order.color !== '') {
        this.$store.dispatch('setProduct', { productName: this.getWatch.name, quantity: this.order.quantity, price: this.getWatch.price, color: this.order.color,  img: this.getWatch.mainImg, })
        this.notSelectedToWishList = false
        this.$router.push('/checkout')
      }
      this.notSelectedToWishList = true
    },
    addToWishList() {
      if (this.order.color !== '') {
        this.$store.dispatch('setProductToWishList', { id: this.getWatch.id, productName: this.getWatch.name,  quantity: this.order.quantity,  price: this.getWatch.price, color: this.order.color, isInWishList: true, img: this.getWatch.mainImg, })
        this.notSelectedToWishList = false
      } else {
        this.notSelectedToWishList = true
      }
    },
    // addSelectedUsers () {
    //   const date = new Date()
    //   let selected = [...this.tempSelected]
    //   const removeDuplicates = [...new Set(selected)]
    //   // add time stamp of user joining
    //   removeDuplicates.forEach(element => {
    //     element.joinedOn = date.toDateString()
    //   })
    //   this.$store.dispatch('addNewUsers', { index: this.activeAccountId, users: removeDuplicates })
    //   this.tempSelected = []
    //   this.displayModal = false
    // },
    shooseColor(img) {
      this.order.color = img.color
      this.quantityOption = img.quantity
      this.order.quantity = 1
    }
  },
  computed: {
    getWatch() {
      return this.$store.getters.getWatches.filter(w => w.id === parseInt(this.projetId))[0]
    },
    getOptionsImgs() {
      return this.getWatch.optionsImgs
    },
    getWatchDesc() {
      return this.getWatch.description
    },
    getDescImgs() {
       return this.getWatch.descImgs.flat()
    },
    randomNumber() {
      return Math.floor(Math.random() * 6) + 1
    }
  },
  mounted() {
    window.scrollTo(0,0);
  }
}
</script>

<style >
.icon-brand {
  background-color: #212226;
}
  .navbar-brand {
    color: #ffffff;
    vertical-align: middle;
  }
  .navbar-brand:hover {
    color: #e7ab3c;
  }
  .btn-outline-custom {
    font-size: 22px;
    color: #ffffff;
    border: 1px solid #ffffff;
    margin: 12px 6%;
  }
  .btn-outline-custom:hover {
    color: #e7ab3c;
  }
  .brand-icon {
    background-color: #212226;
  }
  .display-img-option{
    display: none
  }
  .redddd {
    border: 4px solid #e7ab3c;
  }
</style>