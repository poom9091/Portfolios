<template>
   <div class=" bg-darkblue-cos ">
      <div  class="w-screen h-full  md:w-5/6 mx-auto pt-20 pb-10 md:pt-28 px-12 flex flex-col space-y-5">
         <div class="h2 text-5xl  border-white border-b-8 pb-6 uppercase">
            Contact
         </div>
      </div>
      <Email/>
   </div>
</template>

<script>
import Email from '../components/Contact/Email.vue'
export default {
   components:{
      Email
   }
}
</script>

<style>

</style>