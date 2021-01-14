<template>
  <div class=" bg-darkblue-cos">
    <transition name ="slide-Down" >
      <div v-if="show" class="w-screen h-full  md:w-4/6 mx-auto pt-20 md:pt-28 px-12 flex flex-col space-y-5">
        <div>
          <div class="h2 border-white border-b-8 pb-4">
            ABOUT ME
          </div>
          <ME/>
        </div>
        <div class="flex flex-col  pb-20 lg:flex-row">
              <Education class="pb-8" />
              <div class="flex flex-col space-y-4">
                <Coursework/>
                <ADDITIONALSKILLS/>
              </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Education from '../components/AboutMe/EDUCATION.vue'
import Coursework from '../components/AboutMe/Coursework.vue'
import ADDITIONALSKILLS from '../components/AboutMe/ADDITIONALSKILLS.vue'
import ME from '../components/AboutMe/Me.vue'
export default {
  components:{
    Education,
    Coursework,
    ADDITIONALSKILLS,
    ME
  },
  data(){
    return{
      show:false,
    }
  },
  mounted(){
    this.show=true
  },
  

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