<template>
  <div class="flex flex-col  items-center text-yellow-cos font-semibold text-xl pt-5 pb-5">
     <div class="flex flex-row space-x-10 pb-2 ">
          <button @click="toLink(facebook)" class="icon-title  hover-navbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 12a12 12 0 10-13.9 12v-8.5h-3v-3.4h3V9.4c0-3 1.8-4.6 4.6-4.6l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8v2.3h3.4l-.5 3.4h-2.8V24A12 12 0 0024 12.1z"/>
            </svg>
          </button>

          <button @click="toLink(ig)" type="button" class="icon-title  hover-navbar-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="">
            <path d="M12 0H7C5.9.2 5 .4 4.2.7c-.7.3-1.4.7-2 1.4S.8 3.4.5 4.1c-.3.8-.5 1.7-.5 3a83.6 83.6 0 00.5 12.8c.3.7.7 1.4 1.4 2 .7.8 1.3 1.2 2.1 1.5.8.3 1.7.5 3 .5a83.6 83.6 0 0012.8-.5c.7-.3 1.4-.7 2-1.4.8-.7 1.2-1.3 1.5-2.1.3-.8.5-1.7.5-3a83.6 83.6 0 00-.5-12.8c-.3-.7-.7-1.4-1.4-2-.7-.8-1.3-1.2-2.1-1.5-.8-.3-1.7-.5-3-.5L12 0zm0 2.2h4.8c1.2 0 1.9.3 2.3.4.5.3 1 .5 1.4 1 .4.4.6.8.9 1.3.1.4.3 1 .4 2.2a84 84 0 01-.5 12c-.2.5-.4 1-.9 1.4-.4.4-.8.6-1.3.9-.5.1-1.1.3-2.3.4a84.5 84.5 0 01-12-.5c-.5-.2-.9-.4-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.5-.4-1.1-.4-2.3V12 7c0-1.1.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4H12zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm7.8-10.4a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
            </svg>
          </button>

          <button @click="toLink(git)"  type="button" class="icon-title  hover-navbar-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0012 .3"/>
            </svg>
          </button>
    </div> 
     <p><span class=" font-extrabold text-2xl">Email: </span> pubadee.kl@gmail.com</p>
     <p><span class=" font-extrabold text-2xl">Phone: </span> 064 - 2696638</p>
    
  </div>
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
}
</script>

<style>

</style>