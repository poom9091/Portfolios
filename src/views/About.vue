<template>
  <div class=" bg-darkblue-cos">
    <div class="w-screen h-full  md:w-4/6 bg-hover-icon mx-auto pt-20 md:pt-36 px-12 flex flex-col space-y-5">
      <div>
        <div class="h2">
          ABOUT ME
        </div>
        <div>
        </div>
        <div class=" text-white  text-xl">
          My name is Pubadee Klinocha , a 3rd year student from King Mongkut's University of Technology North Bangkok,<br>
          I'm majoring in Information Technology , I'm interested in Network , Web Programing , Devops , Ethical Hacking 
        </div>
      </div>
        <div class="flex flex-row">
            <Education/>
            <Coursework/>
      </div>
    </div>
  </div>
</template>

<script>
import Education from '../components/AboutMe/EDUCATION.vue'
import Coursework from '../components/AboutMe/Coursework.vue'
export default {
  components:{
    Education,
    Coursework
  }
}
</script>

<style>

</style>