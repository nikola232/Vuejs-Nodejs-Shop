<template>
    <!-- Card deck -->
    <div class="card-deck mt-5">
        <!-- Card -->
        <div class="card mb-4">
            <!--Card image-->
            <div class="view overlay zoom">
                <img class="img-fluid" src="@/assets/manBlueDesign.png" alt="Card image cap">
                <button type="button" class="btn btn-md button-center" @click="manWatches()">Машки часовници</button>
            </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="card mb-4">
            <!--Card image-->
            <div class="view overlay zoom">
                <img class="img-fluid" src="@/assets/womanBlueDesign.png" alt="Card image cap">
                <button type="button" class="btn btn-light-blue btn-md button-center" @click="womanWatches()">Женски часовници</button>
            </div>
        </div>
        <!-- Card -->
        <!-- Card -->
        <div class="card mb-4">
            <!--Card image-->
            <div class="view overlay zoom">
                <img class="img-fluid" src="@/assets/smartBlueDesign.png" alt="Card image cap">
                <button type="button" class="btn btn-light-blue btn-md button-center" @click="smartWatches()">Паметни часовници</button>
            </div>
        </div>
        <!-- Card -->
    </div>
    <!-- Card deck -->
</template>

<script>
export default {
  name: 'MenWomanSmart',
  data () {
      return {
      }
  },
  methods: {
      manWatches() {
          this.$store.dispatch('setCategory', 'Машки')
          this.$router.push('/shop')
      },
      womanWatches() {
          this.$store.dispatch('setCategory', 'Женски')
          this.$router.push('/shop')
      },
      smartWatches() {
          this.$store.dispatch('setCategory', 'Паметни')
          this.$router.push('/shop')
      }
  },
  computed: {
  }
}
</script>