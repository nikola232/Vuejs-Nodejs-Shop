<template>
  <!--Carousel Wrapper-->
  <div id="carousel-example-2" class="carousel-container carousel slide carousel-fade" data-ride="carousel">
    <!--Indicators-->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-2" data-slide-to="1"></li>
      <li data-target="#carousel-example-2" data-slide-to="2"></li>
    </ol>
    <!--/.Indicators-->
    <!--Slides-->
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <!--Mask color-->
        <div class="view">
          <div class="circle-container">
            <div class="circle-sale">
              <div class="circle-dot">
                <p>Супер Цени</p>
              </div>
            </div>
          </div>
          <img class="d-block w-100" src="@/assets/carouselMenWatch.png"
            alt="Second slide">
          <div class="mask rgba-black-strong"></div>
        </div>
        <div class="carousel-caption">
          <h1>Машки Часовници</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br>
            Modi possimus, quae veniam debitis ipsum
          </p>
          <button type="button" class="btn order-btn" @click="manWatches()">Нарачај</button>
        </div>
      </div>
      <div class="carousel-item">
        <!--Mask color-->
        <div class="view">
          <div class="circle-container">
            <div class="circle-sale">
              <div class="circle-dot">
                <p>Супер Цени</p>
              </div>
            </div>
          </div>
          <img class="d-block w-100" src="@/assets/carouselWomenWatch.png"
            alt="Third slide">
          <div class="mask rgba-black-slight"></div>
        </div>
        <div class="carousel-caption">
          <h1>Женски Часовници</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit <br>
            Modi possimus, quae veniam debitis ipsum
          </p>
          <button type="button" class="btn order-btn" @click="womenWatches()">Нарачај</button>
        </div>
      </div>
      <div class="carousel-item">
        <div class="view">
          <div class="circle-container">
            <div class="circle-sale">
              <div class="circle-dot">
                <p>Супер Цени</p>
              </div>
            </div>
          </div>
          <img class="d-block w-100" src="@/assets/carouselSmartWatch.png"
            alt="First slide">
          <div class="mask rgba-black-light"></div>
        </div>
        <div class="carousel-caption">
          <h1>Паметни Часовници</h1>
          <p>Lorem ipsum dgsdgolor sit amet consegsdtetur adipgsdisicing elit <br>
            Modifdsfsd possimus, quae veniam debitis ipsum
          </p>
          <button type="button" class="btn order-btn" @click="smartWatches()">Нарачај</button>
        </div>
      </div>
    </div>
    <!--/.Slides-->
    <!--Controls-->
    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
<!--/.Carousel Wrapper-->
</template>

<script>
export default {
  name: 'Banners',
  data () {
    return {}
  },
  methods: {
    manWatches() {
      this.$store.dispatch('setCategory', 'Машки')
      this.$router.push('/shop')
    },
    womenWatches() {
      this.$store.dispatch('setCategory', 'Женски')
      this.$router.push('/shop')
    },
    smartWatches() {
      this.$store.dispatch('setCategory', 'Паметни')
      this.$router.push('/shop')
    }
  }
}
</script>