<template>
  <div class="adminLogin-container">
    <div class="wrapper fadeInDown">
      <div id="formContent">
        <!-- Tabs Titles -->

        <!-- Login Form -->
        <form @submit="login()">
          <p class="email-container">Email</p>
          <input type="mail" v-model="user.email" id="login" class="fadeIn second" name="login" placeholder="Email" required>

          <div class="password-container">
            <p class="pass-password">Password</p>
            <span @click="switchVisibility" v-show="passwordFieldType === 'password'"><i class="fas fa-eye"></i></span>
            <span @click="switchVisibility" v-show="passwordFieldType === 'text'"><i class="fas fa-eye-slash"></i></span>
          </div>
          <!-- <i class="fas fa-eye-slash"></i> -->
          <input :type="passwordFieldType" v-model="user.password" id="password" class="fadeIn third" name="login" placeholder="password" required>
          
          <input type="submit" class="fadeIn fourth mt-5" value="Log In">
        </form>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      passwordFieldType: 'password'
    }
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
    login() {
      this.$store.dispatch('loginAdmin', { user: this.user })
    }
  }
}
</script>