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
                        <p class="shopTitle mt-2 ml-3">Check Out</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mb-5">
            <div class="row">
                <div class="col-6 data-container">
                    <form @submit="orderProducts">
                        <div class="title-container">Твои Податоци</div>
                        <div class="d-flex justify-content-between">
                            <div class="input-name">
                                <p>Име *</p>
                                <input type="text" v-model="userData.name" required>
                                <p class="mb-4 text-danger">{{errors[0]}}</p>
                            </div>
                            <div class="input-name">
                                <p>Презиме *</p>
                                <input type="text" v-model="userData.lastName" required>
                                <p class="mb-4 text-danger">{{errors[1]}}</p>
                            </div>
                        </div>
                        <p>Телефон *</p>
                        <input type="number" v-model="userData.phoneNumber" required>
                        <p class="mb-4 text-danger">{{errors[2]}}</p>
                        <p>Емаил *</p>
                        <input class="mb-4" type="email" v-model="userData.email">
                        <p>Град/Село *</p>
                        <input type="text" v-model="userData.city" required>
                        <p class="mb-4 text-danger">{{errors[3]}}</p>
                        <p>Адреса на живеење *</p>
                        <input type="text" v-model="userData.adress" required>
                        <p class="mb-4 text-danger">{{errors[4]}}</p>
                        <button type="submit" class="btn-order" :disabled="!productsForBuying.length">Нарачај</button>
                    </form>
                </div>
                <div class="col-6 products-container">
                    <div class="title-container">Продукти</div>
                    <div v-if="!productsForBuying.length" class="product-container">
                        <h4 class="mb-4">Изберете Продукти</h4>
                        <button @click="goToShop()" class="btn-shop">Go to Shop</button>
                    </div>
                    <div v-else class="product-container">
                        <h4>Продукти</h4>
                        <div v-for="(product, index) in productsForBuying" :key="index" class="products-list">
                            <p class="mr-2 mb-0"><img class="img-product" :src="product.img"></p>
                            <div class="m-auto d-flex">
                                <p class="mr-2 m-auto">{{ product.productName }} </p>
                                <p class="pl-2 m-auto"> x {{ product.quantity }}</p>
                            </div>
                            <p class="m-auto">{{ product.color }}</p>
                            <p class="m-auto">{{ product.price * product.quantity }} ден</p>
                            <p class="m-auto" @click="removeProduct(index)">X</p>
                        </div>
                        <div class="d-flex mt-5">
                            <h5>Вкупно:</h5>
                            <p class="ml-auto">{{ totalPrice }} ден</p>
                        </div>
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
    name: 'CheckOut',
    components: {
        SearchOnTopPage,
        NavBar,
        Footer
    },
    data() {
        return {
            userData: {
                name: '',
                lastName: '',
                phoneNumber: void 0,
                email: '',
                city: '',
                adress: '',
            },
            errors: [],
        }
    },
    methods: {
        orderProducts(e) {
            e.preventDefault()
            console.log('User data: ', this.userData)
            console.log('User products: ', this.productsForBuying)
        },
        goToShop() {
            this.$router.push('/shop')
        },
        removeProduct(index) {
            this.productsForBuying.splice(index, 1)
        }
    },
    computed: {
        productsForBuying () {
            return this.$store.getters.getProductsForBuying
        },
        pricePerProduct() {
            return this.productsForBuying
        },
        totalPrice() {
            return this.productsForBuying.map(p => p.price * p.quantity).reduce((a, b) => a + b, 0)
        }
    }
}
</script>