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
      NSC:{
        name : 'Thailand IT Contest Festival 2018 ',
        link :'https://github.com/poom9091/NSC_medicine-cabinet-use-RFID-scanning',
        texts : ['- Developed a medicine cabinet use RFID scanning system'],
        list_imgs:[
            {img:require('../../assets/NSC/NSC_1.jpg')},
            {img:require('../../assets/NSC/NSC_2.jpg')},
            {img:require('../../assets/NSC/NSC_3.jpg')}
        ],
        name_buttom:'GitHub',
      },
      Intern:{
        name : 'Intern at Chiangmai Technical College  in Information Technology',
        link :'https://www.youtube.com/playlist?list=PLC4CZjlaBNKuTKzLGrugiwaIW3aOGnFwS',
        texts : ['- Teacher Assistant','- Developed a weather detector to analyze weather for farmers to present to the Centerfor Information Technology and Vocational Workforce. In making videos on YouTube'],
        list_imgs:[
            {img:require('../../assets/Intern/Intern_1.jpg')},
            {img:require('../../assets/Intern/Intern_2.jpg')},
            {img:require('../../assets/Intern/Intern_3.jpg')}
        ],
        name_buttom:'YouTube',
      },
      
  }
  },
  components:{
    Board,
  },
  mounted(){
    this.show_board=true
  }
  
  
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