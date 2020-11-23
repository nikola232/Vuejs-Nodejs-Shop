<template>
    <div>
        <SearchOnTopPage ref="SearchOnTopPage" />
        <NavBar ref="NavBar" />
        <div class="container mt-4">
            <div class="row">
                <div class="col-12">
                    <div class="lineUnderNavbar">
                        <router-link to="/" class="homeBtn">
                            <i class="fas fa-home"></i>
                            <p class="homeTitle mt-2 ml-2 mr-3">Home</p>
                        </router-link>
                        <i class="fas fa-chevron-right"></i>
                        <p class="shopTitle mt-2 ml-3" @click="checkedModels()">Shop</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <SideBarProducts ref="SideBarProducts" @checkedModels="checkedModels" />
                </div>
                <div class="col-9">
                    <Products ref='Products' :chooseModels="chooseModels"/>
                </div>
            </div>
        </div>
        <Footer ref="Footer" />
    </div>
</template>

<script>
import SearchOnTopPage from '../HomePage/SearchOnTopPage.vue'
import NavBar from '../HomePage/NavBar.vue'
import SideBarProducts from './SideBarProducts.vue'
import Products from './Products.vue'
import Footer from '../HomePage/Footer'
export default {
    name: 'ProductsPage',
    components: {
        SearchOnTopPage,
        NavBar,
        SideBarProducts,
        Products,
        Footer
    },
    data() {
        return {
            chooseModels: {}
        }
    },
    methods: {
        checkedModels(checkedModels) {
            this.chooseModels = checkedModels
            console.log(this.chooseModels)
        }
    }
}
</script>