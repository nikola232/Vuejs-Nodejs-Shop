<template>
    <div class="container-products">
        <!-- <p>{{ chooseModels.category }}</p>
        <p>{{ chooseModels.checkedModel }}</p>
        <p>{{ chooseModels.price }}</p> -->
        <div class="d-flex justify-content-between">
            <div class="dropdowns-container">
                <div class="dropdown mr-4">
                    <select class="dropdown-btn" v-model="priceIncreaseDecrease">
                            <option>Стандардно</option>
                            <option>Цена растечки</option>
                            <option>Цена опаѓачки</option>
                            <!-- <span class="mr-5">{{  price.text }}</span><i class="fas fa-chevron-right"></i> -->
                    </select>
                </div>
                <div class="dropdown">
                    <select class="dropdown-btn" v-model="numberOfProduct">
                        <option v-for="(option, index) in options" :key="index" :value="option.value" class="dropdown-item">
                            Прикажувај : {{ option.text }} <i class="fas fa-chevron-right"></i>
                        </option>
                    </select>
                </div>
            </div>
            <p>Прикажувај 01 - {{numberOfProduct}} од {{ numberOfAllWatches }} Продукти</p>
        </div>
        <div class="row">
            <div class="col-4 mb-4" v-for="(watch, index) in filteredWatches" :key="index">
                <div class="card">
                    <i v-show="ifProductIsInWishList.length === 0" class='heart-icon' @click="addToWishList(watch)" aria-hidden="true"></i>
                    <i :class="id === watch.id ? 'heart-icon-yellow' : 'heart-icon'" v-for="(id , index) in ifProductIsInWishList" :key="index" @click="addToWishList(watch)" aria-hidden="true"></i>
                    <img class="card-img-top" :src="watch.mainImg" alt="Card image cap">
                    <div class="d-flex nonvisible-buttons">
                        <button class="btn btn-outline-custom" @click="koshnicka()"><i class="fas fa-cart-arrow-down"></i></button>
                        <p class="more-button" @click="showProduct(watch)">Повеќе</p>
                    </div>
                    <div class="card-body">
                        <p class="card-title text-center"><small class="text-muted">{{watch.name}}</small></p>
                        <h5 class="card-title text-center">{{ watch.name }}</h5>
                        <div class="d-flex justify-content-center">
                            <p class="price-product mr-3">{{ watch.price }} ден</p>
                            <strike class="mt-2">{{ watch.price + 1200}} ден</strike>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-pagination
            v-model="currentPage"
            :total-rows="8"
            :per-page="perPage"
            aria-controls="my-table"
        ></b-pagination>

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
</template>

<script>
export default {
    name: 'Products',
    props: ['chooseModels'],
    data() {
        return {
            perPage: 3,
            currentPage: 1,
            priceIncreaseDecrease: 'Стандардно',
            numberOfProduct: 9,
            options: [
                { text: '9 Продукти', value: 9 },
                { text: '18 Продукти', value: 18 },
                { text: '27 Продукти', value: 27 },
                { text: '36 Продукти', value: 36 },
                { text: '45 Продукти', value: 45 },
                { text: 'Сите Продукти', value: 1000 }
            ],
            priceIncreaseDecreaseOptions: [
                { text: 'Цена растечки', value: 'Цена растечки'},
                { text: 'Цена опаѓачки', value: 'Цена опаѓачки'}
            ]
        }
    },
    methods: {
        showProduct(watch) {
            if (this.$router.path !== `/product/${watch.id}`) {
                this.$router.push(`/product/${watch.id}`)
            }
        },
        koshnicka() {
            this.$router.push('/checkout')
        },
        addToWishList(watch) {
            this.$store.dispatch('setProductToWishList', { id: watch.id, productName: watch.name,  quantity: 1,  price: watch.price, color: watch.optionsImgs[0].color, isInWishList: true, img: watch.mainImg })
        }
    },
    mounted() {
        this.$store.dispatch('getWatches')
    },
    computed: {
        getWatchesMongoDb() {
            return this.$store.getters.getWatchesMongoDb
        },
        ifProductIsInWishList() {
            return this.$store.getters.getProductsFromWishList.map(p => p.id)
        },
        getCategory() {
            return this.$store.getters.productCategory
        },
        getProductModel() {
            return this.$store.getters.productModel
        },
        productMinPrice() {
            return this.$store.getters.productMinPrice
        },
        productMaxPrice() {
            return this.$store.getters.productMaxPrice
        },
        numberOfAllWatches() {
            return this.$store.getters.getWatches.length
        },
        getWatches() {
            if (this.numberOfProduct === 'Сите Продукти') { return this.$store.getters.getWatches.slice(0, this.numberOfAllWatches) }
            return this.$store.getters.getWatches
        },
        productCategory() {
            switch (this.getCategory) {
                case "Женски":
                    return this.getWatches.filter(m => m.type === "Женски Часовник")
                case "Машки":
                    return this.getWatches.filter(m => m.type === "Машки Часовник")
                case "Паметни":
                    return this.getWatches.filter(m => m.type === "Паметни Часовник")
                case "Сите":
                    return this.getWatches
                default:
                    return this.getWatches
            }
            
        },        
        filteredWatches() {
            if(this.priceIncreaseDecrease === 'Стандардно') { return this.productCategory.slice(0, this.numberOfProduct) }
            return this.productCategory.slice(0, this.numberOfProduct).sort((a, b) => this.priceIncreaseDecrease === 'Цена растечки' ? a.price - b.price : b.price - a.price)
        }
    }
}
</script>