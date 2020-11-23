<template>
  <div class="womenWatches-container">
    <div class="women-img">
        <div class="women-title">
            <p class="womenT">Женски</p>
            <p class="womenW">Најпродавани</p>
        </div>
      <img src="@/assets/womenFashion.jpg" alt="">
    </div>
    <div class="card-deck">
      <div class="card" v-for="(watch, index) in getThreeMostSolddWomenWatches" :key="index">
        <img class="card-img-top" :src="watch.mainImg" alt="Card image cap">
        <div class="card-body">
          <h5 class="catagory-name">Watch</h5>
          <h5 class="watch-brand">{{ watch.name }}</h5>
          <h5 class="watch-price">{{ watch.price }} ден</h5>
          <button type="button" @click="orderWatch(watch)" class="btn order-btn">Нарачај</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WomenWatches',
  data () {
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
    getThreeMostSolddWomenWatches () {
      return this.$store.getters.getWatches.slice().sort((a, b) => b.counter - a.counter).filter(w => w.type === 'Женски Часовник').slice(0,3);
    }
  }
}
</script>