<template>
    <div class="dealWeek-container">
      <div class="txt-container">
        <p class="title-1">Понуда На Неделата</p>
        <div class="border-div"></div>
        <p class="title-2">{{getWatchOfWeek.description.desc}}</p>
        <p class="title-3">{{getWatchOfWeek.price}} ден<span class="title-33"> / Часовник</span></p>
        <div class="time-card-container">
          <!--  Timer Component  -->
        <CountdownTimer 
         starttime="Nov 5, 2018 15:37:25" 
         endtime="Dec 20, 2020 16:37:25" 
         trans='{  
         "day":"Day",
         "hours":"Hours",
         "minutes":"Minuts",
         "seconds":"Seconds",
         "expired":"Event has been expired.",
         "running":"Till the end of event.",
         "upcoming":"Till start of event.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
         ></CountdownTimer>
        </div>
        <button type="button" class="btn order-btn" @click="delaOfTheWeekWatch()">Нарачај</button>
      </div>
      <div class="img-container">
        <img class="img-watch" src="@/assets/dealOfWeek.png" alt="Card image cap">
      </div>
    </div>
</template>

<script>
import CountdownTimer from './TImer.vue'
export default {
  name: 'DealOfTheWeek',
  components: {
    CountdownTimer
  },
  methods: {
    delaOfTheWeekWatch() {
      this.$store.dispatch('setProduct', { productName: this.getWatchOfWeek.name, quantity: 1, price: this.getWatchOfWeek.price, color: 'white',  img: this.getWatchOfWeek.mainImg, })
      this.$router.push('/checkout')
    }
  },
  computed: {
    getWatchOfWeek() {
      return this.$store.getters.getWatches.find(w => w.id === 5)
    }
  }
}
</script>