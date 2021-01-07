<template>
  <div class=" mt-10 mb-16 flex  flex-col space-y-9 ">
      <h1 class="text-darkblue-cos text-4xl md:text-5xl font-black  text-center w-full">Activities & Experience</h1>
      <div class=" bg-red-800 px-6 md:px-14 max-h-max h-auto py-8 mx-5 lg:mx-24 space-y-9 rounded-3xl shadow-xl">
        <NSC/>
        <intren/>
      </div>
            
  </div>
</template>

<script>

import NSC from "./nsc.vue"
import Intren from "./IntrenCMTC.vue"
export default {
    components:{
       NSC,
       Intren
    }
}
</script>

<style>

</style>