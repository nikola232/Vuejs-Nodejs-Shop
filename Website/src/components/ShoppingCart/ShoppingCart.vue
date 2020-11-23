<template>
    <div>
        <SearchOnTopPage ref="SearchOnTopPage" />
        <NavBar ref="NavBar" />
        <div class="container mb-3">
            <div class="row">
                <div class="col-12">
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
                        <p class="shopTitle mt-2 ml-3">Shopping Cart</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mb-5">
            <div class="row">
                <div class="col-12 shoppingcart-data-container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="pl-5">Слика</th>
                                <th>Име на продуктот</th>
                                <th>Цена</th>
                                <th>Количина</th>
                                <th>Модел</th>
                                <th>Вкупно</th>
                                <th>X</th>
                            </tr>
                        </thead>
                        <tbody v-for="(product, index) in productsFromWishList" :key="index">
                            <tr>
                                <td><img :src="product.img" alt="product" class="product-img"></td>
                                <td>{{ product.productName }}</td>
                                <td class="product-price-design">{{ product.price }} ден</td>
                                <td>
                                <div class="def-number-input number-input safari_only">
                                    <button @click="onMinusClick(index, product)" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                    <input class="quantity" min="0" name="quantity" :value="product.quantity" type="number">
                                    <button @click="onPlusClick(index, product)" onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                                </div>
                                </td>
                                <td class="product-price-design">{{ product.color }}</td>
                                <td class="product-price-design">{{ product.price * product.quantity }} ден</td>
                                <td @click="removeProduct(index)">X</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="container mb-5">
            <div class="row">
                <div class="col-6">
                    <button class="continue-shopping-btn" @click="continueShopping()">Continue shopping</button>
                </div>
                <div v-if="productsFromWishList.length" class="col-6">
                    <div class="d-flex justify-content-between pay-container">
                        <p>Вкупно:</p>
                        <p>{{ totalPrice }} ден</p>
                    </div>
                    <button class="pay-btn" @click="pay()">Нарачај</button>
                </div>
                <div v-else class="col-6">
                    <div class="product-container">
                        <h4 class="mb-4">Изберете Продукти</h4>
                        <button @click="goToShop()" class="btn-shop">Go to Shop</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer ref="Footer" />
    </div>
</template>

<script>
import SearchOnTopPage from '../HomePage/SearchOnTopPage.vue'
import NavBar from '../HomePage/NavBar.vue'
import Footer from '../HomePage/Footer'
export default {
    name: 'ShoppingCart',
    components: {
        SearchOnTopPage,
        NavBar,
        Footer
    },
    data() {
        return {
            productsFromWishList: this.$store.getters.getProductsFromWishList
        }
    },
    methods: {
        removeProduct(index) {
            this.productsFromWishList.splice(index, 1)
        },
        onMinusClick(index) {
            this.productsFromWishList[index].quantity = this.productsFromWishList[index].quantity - 1
        },
        onPlusClick(index) {
            this.productsFromWishList[index].quantity = this.productsFromWishList[index].quantity + 1
        },
        pay() {
            console.log(' this.productsFromWishList ',  this.productsFromWishList)
            this.$store.dispatch('setProductsFromWishList', this.productsFromWishList)
            this.$router.push('/checkout')
        },
        continueShopping() {
            this.$router.push('/shop')
        },
        goToShop() {
            this.$router.push('/shop')
        }
    },
    computed: {
        pricePerProduct() {
            return this.productsFromWishList
        },
        totalPrice() {
            return this.productsFromWishList.map(p => p.price * p.quantity).reduce((a, b) => a + b, 0)
        }
    }
}
</script>