<template>
    <div>
        <div class="search-container">
            <button class="btn btn-outline-custom mr-2" type="submit"><i class="fas fa-store-alt"></i></button>
            <a class="navbar-brand" href="/">Меркатор МК</a>
            <input class="form-control " type="text" placeholder="Пребарувај" aria-label="Search">
            <div class="input-group-append">
                <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey" aria-hidden="true"></i></span>
            </div>
            <div class="ml-5 d-flex">
                <div class="text-center mr-4">
                    <b-btn class="btn btn-outline-custom" @click="listaNaZelbi()">
                        <i class="fa fa-heart" aria-hidden="true"></i><span v-show="lengthOfProductsInWishList > 0" class="badge badge-pill badge-primary ml-2">{{lengthOfProductsInWishList}}</span> Листа на желби
                    </b-btn>
                </div>
            <button class="btn btn-outline-custom" id="myButton2" @click="koshnicka()"><i class="fas fa-cart-arrow-down"></i> Нарачај</button>
            <b-tooltip target="myButton2" custom-class="veryLongTooltip" :triggers="this.lengthOfProductsInWishList === 0 ? '' : 'hover'">
                <div class="popups-container">
                    <div class="popup-container" v-for="(product, index) in productsFromWishList" :key="index">
                        <img :src="product.img" class="popup-img ">
                        <div class="texts-container">
                            <p class="price-and-quantity">{{ product.price }} x {{ product.quantity }}</p>
                            <p class="watch-brand">{{ product.productName }}</p>
                        </div>
                        <p class="close-btn" @click="removeProduct(index)"><i class="fa fa-times icon-close" aria-hidden="true"></i></p>
                    </div>
                </div>
                <div class="popup-bottom">
                    <div class="total-price">
                        <p class="total-price-text">Total:</p>
                        <p class="total-price-text">{{totalPrice}} ден</p>
                    </div>
                    <button class="btn-btn btn-list" @click="listaNaZelbi()"><i class="fas fa-heart mr-2"></i>Листа на желби</button>
                    <button class="btn-btn btn-order" @click="koshnicka()"><i class="fas fa-cart-arrow-down mr-2"></i> Нарачај</button>
                </div>
            </b-tooltip>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchOnTopPage',
    data () {
        return {
            productsFromWishList: this.$store.getters.getProductsFromWishList
        }
    },
    methods: {
        koshnicka() {
            this.$router.push('/checkout')
        },
        listaNaZelbi() {
            this.$router.push('/shoppingcart')
        },
        removeProduct(index) {
            this.productsFromWishList.splice(index, 1)
        },
    },
    computed: {
        totalPrice() {
            return this.productsFromWishList.map(p => p.price * p.quantity).reduce((a, b) => a + b, 0)
        },
        lengthOfProductsInWishList() {
            return this.productsFromWishList.length
        }
    }
}
</script>

<style>
.badge-primary {
    background-color: #e7ab3c !important;
    top: -9px !important;
    font-size: 8px !important;
    left: -14px !important;

}
.tooltip {
    opacity: 1 !important;
}
.tooltip-inner {
    max-width: 350px !important;
    background-color: #fff !important;
    color: #232530 !important;
    padding: 30px !important;
    opacity: 1 !important;
    border: 1px solid black;
}
.popup-img {
    height: 85px;
}
.popups-container {
    height: 318px;
    overflow: auto;
}
.popup-container {
    display: flex;
    margin-bottom: 22px;
}
.texts-container {
    text-align: left;
    padding-right: 4px;
    padding-left: 14px;
    margin: auto 0;
}
.price-and-quantity {
    color: #e7ab3c;
    font-size: 16px;
    text-align: left;
    margin-bottom: 4px;
}
.watch-brand {
    color: #232530;
    font-size: 16px;
    margin-bottom: 4px;
}

.close-btn {
    margin: auto 16px auto auto;
}

.icon-close {
    margin-left: 12px;
    font-size: 20px;
}

.popup-bottom{
    border-top: 1px solid #e5e5e5;
    padding-top: 26px;
    margin-bottom: 30px;
}
.total-price {
    display: flex;
    justify-content: space-between;
}
.total-price-text {
    font-size: 18px;
    color: #e7ab3c;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-btn {
    color: #212226;
    border: 1px solid #212226;
    background-color: #fff;
}
.btn-btn:hover {
    color: #e7ab3c;
    transition: all .5s;
}

.btn-list {
    text-align: center;
    background: #191919;
    color: #ffffff;
    width: 100%;
    padding: 15px 30px 12px;
    border: none;
}

.btn-order {
    width: 100%;
    text-align: center;
    background: #e7ab3c;
    color: #191919;
    padding: 15px 30px 12px;
    margin-top: 12px;
    border: none;
}

/* Scroll Bar */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #e7ab3c; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #bd8c32; 
}
</style>