<template>
  <div>
      <div class="navBar-container">
        <!--Navbar-->
        <nav class="navbar">
          
          <!-- Basic dropdown -->
          
          <li class="nav-item dropdown dropdown-categories">
            <button class="btn btn-bars-icon" type="submit" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-bars"></i></button>
            <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
              Категории
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="manWatches()">Женски Часовници</a>
              <a class="dropdown-item" @click="womanWatches()">Машки Часовници</a>
              <a class="dropdown-item" @click="smartWatches()">Паметни Часовници</a>
            </div>
          </li>
          <!-- Basic dropdown -->

          <!-- Buttons gorup -->
          <div class="btn-group" role="group" aria-label="Vertical button group">
            <router-link type="button" class="navbar-button" to="/">HOME</router-link>
            <router-link type="button" class="navbar-button" to="/shop">SHOP</router-link>
            <router-link type="button" class="navbar-button" to="/">COLLECTION</router-link>
            <router-link type="button" class="navbar-button" to="/contact">CONTACT</router-link>
            <router-link type="button" class="navbar-button" to="/">BLOG</router-link>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>

export default {
  name: 'NavBar',
  data () {
    return {}
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
  }
}
</script>