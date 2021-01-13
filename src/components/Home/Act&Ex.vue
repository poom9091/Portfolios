<template>
  <div class=" mt-10 mb-16 flex  flex-col space-y-9 ">
      <h1 class="text-darkblue-cos text-4xl md:text-5xl font-black  text-center w-full">Activities & Experience</h1>
      <transition name="sildeDowe"  >
        <div v-if="show_board"  class="px-6 md:px-14 max-h-max h-auto py-8 mx-5 lg:mx-24 space-y-9 ">
          <Board v-bind=NSC />
          <Board v-bind=Intern />
        </div>
      </transition>
      
     
  </div>
</template>

<script>
import Board from "./board.vue"
export default {
  el:'root',
  data(){
    return{
      show_board:false,
      NSC:this.$store.getters.getInfo('Nsc'),
      Intern:this.$store.getters.getInfo('Intern'),  
    }
  },
  components:{
    Board,
  },
  mounted(){
    this.show_board=true
  },
  
  
}
</script>

<style>
  .sildeDowe-enter-active {
    animation: fadeDown .8s;
  }
  .sildeDowe-leave-active {
    animation: fadeDown .8s reverse ;
  }
  @keyframes fadeDown  {
    0% {
      transform: scaley(0);
      transform-origin: top ;
      opacity: 0;
    }
    100% {  
      transform: scaley(1); 
      transform-origin: top ;
      opacity: 1;
    }
  }
</style>