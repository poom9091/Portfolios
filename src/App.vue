<template>
  <div class="w-full h-full " >
    <HomeButton class="fixed  left-0 top-0 m-5 "/>
    <Navbar class="fixed right-0 pb-5 invisible md:visible"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HomeButton from './components/HomeButton.vue'
export default {
  components:{
    Navbar,
    HomeButton
  }
}
</script>
<style>

</style>
