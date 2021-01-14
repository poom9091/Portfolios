<template>
  <transition name="slide-R">
          <div v-if="showL" class="flex flex-col py-5 lg:flex-row">
            <img src="../../assets/DSC.jpg" class=" h-64 max-w-max w-auto mx-auto rounded-xl shadow-2xl">
            <div class=" text-white  text-xl py-5 lg:my-auto lg:ml-20 font-mono leading-tight text-left">
              My name is Pubadee Klinocha,a 3rd year student from King Mongkut's University of Technology North Bangkok,
              I'm majoring in Information Technology , I'm interested in Network , Web Programing , Devops
            </div>
          </div>
    </transition>
</template>

<script>
export default {
    data(){
        return{
            showL:false
        }
    },
    mounted(){
        this.showL=true
    }
}
</script>

<style>
  .slide-R-enter-active {
        transition: all .8s ease;
        transition-delay: 250ms;
  }
  .slide-R-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        transition-delay: 250ms;
  }
  .slide-R-enter, .slide-R-leave-to  {
        transform: translateX(-10px);
        opacity: 0;
  }
</style>