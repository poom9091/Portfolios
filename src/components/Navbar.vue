<template>
        <div class=" flex justify-around items-center flex-col h-screen ">
          <button class="hover-Navbar  button-menu hover-Navbar " v-for="list in lists " :key="list" >
            <div class="font-menu transform rotate-90">
                {{list}}
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
      lists:['About Me','Experience','Contact'],
    }
  },
  methods:{
    toLink(link) {
      window.location.href = link;
    },
    hoverOver(index) {
      if(!index) this.show=false
      else this.show= true
      console.log('over');
    }
  },
  mounted(){
    this.show=true
  },
 
}
</script>

<style>
</style>