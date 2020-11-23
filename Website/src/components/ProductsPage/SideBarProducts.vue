<template>
    <div>
        <div class="row mt-5">
            <div class="col mt-3">
                <h5 class="card-title mb-4">Категориja</h5>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" value="Женски" id="Женски" v-model="category">
                    <label class="form-check-label" for="Женски">Женски</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" value="Машки" id="Машки" v-model="category">
                    <label class="form-check-label" for="Машки">Машки</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" value="Паметни" id="Паметни" v-model="category">
                    <label class="form-check-label" for="Паметни">Паметни</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="radio" value="Сите" id="Сите" v-model="category">
                    <label class="form-check-label" for="Сите">Сите часовници</label>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col">
                <h5 class="card-title mb-4">Бренд</h5>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="vacheron" id="vacheron" v-model="checkedModel">
                    <label class="form-check-label" for="vacheron">Vacheron Constantin</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="rolex" id="rolex" v-model="checkedModel">
                    <label class="form-check-label" for="rolex">Rolex</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="audemars" id="audemars" v-model="checkedModel">
                    <label class="form-check-label" for="audemars">Audemars Piguet</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="omega" id="omega" v-model="checkedModel">
                    <label class="form-check-label" for="omega">Omega</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="bremont" id="bremont" v-model="checkedModel">
                    <label class="form-check-label" for="bremont">Bremont</label>
                </div>
                <div class="form-check mb-2">
                    <input class="form-check-input" type="checkbox" value="louis" id="louis" v-model="checkedModel">
                    <label class="form-check-label" for="louis">Louis Moinet</label>
                </div>
            </div>
        </div>
        <!-- <div class="row mt-5 ml-1">
            <h5 class="card-title mb-4">Цена</h5>
            <form>
                <div class="d-flex align-items-center">
                <div class="md-form md-outline my-0">
                    <input id="from" type="text" class="form-control mb-0" v-model="minPrice">
                    <label for="form">$ Min</label>
                </div>
                <p class="px-3"></p>
                <div class="md-form md-outline">
                    <input id="to" type="text" class="form-control mb-0"  v-model="maxPrice">
                    <label for="to">$ Max</label>
                </div>
                </div>
            </form>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'SideBarProducts',
    data() {
        return {
            category: 'Сите',
            checkedModel: []
            // minPrice: void 0,
            // maxPrice: void 0,
        }
    },
    methods: {
    },
    updated () {
        // this.$emit('checkedModels', { 'category': this.category,  'checkedModel': this.checkedModel, 'price': { 'max': this.minPrice, 'min': this.maxPrice}})
        // console.log(this.category, this.checkedModel, this.minPrice, this.maxPrice)
        if(!this.category !== '') { this.$store.dispatch('setCategory', this.category) }
        if(!this.checkedModel !== []) { this.$store.dispatch('setCheckedModel', this.checkedModel) }
        // if(!this.minPrice !== void 0 || !this.maxPrice) { this.$store.dispatch('setMinAndMaxPrice', { minPrice: this.minPrice, maxPrice: this.maxPrice }) }
        
    }
}
</script>