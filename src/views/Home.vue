<template>
  <div class="w-screen h-screen  bg-darkblue-cos ">
    <div class="flex flex-wrap pt-20">
      <Title  class="ml-10 md:ml-20 h-60" />
       
      
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/title.vue'

export default {
  name: 'Home',
  components: {
    Title
  }
}
</script>
