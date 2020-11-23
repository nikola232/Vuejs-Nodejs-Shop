<template>
  <div class="menWatches-container">
    <div class="card-deck">
      <div class="card" v-for="(watch, index) in getThreeMostSolddMenWatches" :key="index">
        <img class="card-img-top" :src="watch.mainImg" alt="Card image cap">
        <div class="card-body">
          <h5 class="catagory-name">Watch</h5>
          <h5 class="watch-brand">{{ watch.name }}</h5>
          <h5 class="watch-price">{{ watch.price }} ден</h5>
          <button type="button" @click="orderWatch(watch)" class="btn order-btn">Нарачај</button>
        </div>
      </div>
    </div>
    <div class="men-img">
        <div class="men-title">
            <p class="menT">Машки</p>
            <p class="menW">Најпродавани</p>
        </div>
        <img src="@/assets/menFashion.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenWatches',
  data() {
    return {}
  },
  methods: {
    orderWatch(watch) {
      if (this.$router.path !== `/product/${watch.id}`) {
          this.$router.push(`/product/${watch.id}`)
      }
    }
  },
  computed: {
    getThreeMostSolddMenWatches () {
      return this.$store.getters.getWatches.slice().sort((a, b) => b.counter - a.counter).filter(w => w.type === 'Машки Часовник').slice(0,3);
    }
  }
}
</script>