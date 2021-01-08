<template>

  <header class="  items-center justify-between h-full flex flex-col" >
          
        <div class=" h-5/6 w-auto flex flex-col ">
          <button class="hover-Navbar  button-menu"  >
            <span class="transform rotate-90 m-auto">
                About Me
            </span>
          </button>
        
          <button class="hover-Navbar  button-menu">
            <span class="transform rotate-90 m-auto">
                Experience
            </span>
          </button>
          
          <button class="hover-Navbar  button-menu">
            <span class="transform rotate-90 m-auto">
                Contact
            </span>
          </button>
        </div>
      
      
      
    </header>

</template>

<script>
export default {
  data () {
    return{
      facebook:'https://www.facebook.com/pubadee.klinocha/',
      ig: 'https://www.instagram.com/pubadee_nz91/',
      git: 'https://github.com/poom9091',
      show:false
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