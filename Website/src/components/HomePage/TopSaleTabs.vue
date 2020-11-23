
<template>
    <div class="mt-5 pt-2">
        <h2 style="text-align: center; margin-top: 40px">Top Sales</h2>
        <div class="cards-container">
            <!-- Top Two Sale -->
            <div class="topSaleCard" v-for="(item, index) in topTwoSale" :key="index">
                <img class="card-img-top" src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/press/news/2019/news-191106/news-kv.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price: {{ item.price }}</li>
                    <li class="list-group-item">Quantity: {{ item.quantity }}</li>
                    <li class="list-group-item">Counter Seling: {{ item.counterSelling }}</li>
                </ul>
                <div class="card-body">
                    <a class="btn button-topSale" href="#" title="Get Started" role="button">Нарачај</a>
                </div>
            </div>
            <!-- Top One Sale -->
            <div class="topSaleCard black" v-for="(item, index) in topOneSale" :key="index">
                <img class="card-img-top" src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/press/news/2019/news-191106/news-kv.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price: {{ item.price }}</li>
                    <li class="list-group-item">Quantity: {{ item.quantity }}</li>
                    <li class="list-group-item">Counter Seling: {{ item.counterSelling }}</li>
                </ul>
                <div class="card-body">
                    <a class="btn button-topSale-black" href="#" title="Get Started" role="button">Нарачај</a>
                </div>
            </div>
            <!-- Top Three Sale -->
            <div class="topSaleCard" v-for="(item, index) in topThreeSale" :key="index">
                <img class="card-img-top" src="https://consumer-img.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/press/news/2019/news-191106/news-kv.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ item.name }}</h5>
                    <p class="card-text">{{ item.description }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price: {{ item.price }}</li>
                    <li class="list-group-item">Quantity: {{ item.quantity }}</li>
                    <li class="list-group-item">Counter Seling: {{ item.counterSelling }}</li>
                </ul>
                <div class="card-body">
                   <a class="btn button-topSale" href="#" title="Get Started" role="button" @click="getTopThreeSaledItems()">Нарачај</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopSaleTabs',
  data () {
      return {
      }
  },
  methods: {
  },
  computed: {
    topOneSale () {
        return this.$store.getters.getItemList.slice().sort((a, b) => b.counterSelling - a.counterSelling).slice(0,1)
    },
    topTwoSale () {
        return this.$store.getters.getItemList.slice().sort((a, b) => b.counterSelling - a.counterSelling).slice(1,2)
    },
    topThreeSale () {
        return this.$store.getters.getItemList.slice().sort((a, b) => b.counterSelling - a.counterSelling).slice(2,3)
    }
  }
}
</script>