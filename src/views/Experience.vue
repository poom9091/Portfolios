<template>
    <div  class="bg-darkblue-cos  ">
    <transition name ="slide-Down" >
      <div v-if="show" class=" h-full  md:w-5/6 mx-auto pt-20 md:pt-28 px-2 md:px-12 flex flex-col space-y-5">
        <div class="h2 text-4xl md:text-6xl  border-white border-b-8 pb-6 uppercase">
          Experience
        </div>
        <titleEX />
      </div>
    </transition>
    </div>
</template>

<script>
import titleEX from '../components/Experience/title_EX.vue'
export default {
    data(){
      return{
        show:false
      }
    },
    components:{
        titleEX
    },
    mounted(){
      this.show = true
    }
}
</script>

<style>
.slide-Down-enter-active {
        transition: all .8s ease;
  }
  .slide-Down-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-Down-enter, .slide-Down-leave-to  {
        transform: translatey(-10px);
        opacity: 0;
  }

</style>