<template>
        <div class=" flex justify-around items-center flex-col h-screen ">
          <button class="hover-Navbar  button-menu hover-Navbar " v-for="(list,name) in lists " :key="name" @click="toLink(list)" >
            <div class="font-menu transform rotate-90">
                {{name}}
            </div>
          </button>
        </div>
</template>

<script>
export default {
  data () {
    return{
      facebook:'https://www.facebook.com/pubadee.klinocha/',
      ig: 'https://www.instagram.com/pubadee_nz91/',
      git: 'https://github.com/poom9091',
      show:false,
      lists:{
        'About Me':'/about',
        'Experience':'/experience',
        'Contact':'/contact'
      },
    }
  },
  methods:{
    toLink(link) {
      this.$router.push(link)
    },
  },
  mounted(){
    this.show=true
  },
 
}
</script>

<style>
</style>