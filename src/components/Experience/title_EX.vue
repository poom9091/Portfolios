<template>
  <div class=" grid grid-cols-2 justify-items-stretch  max-w-max">
    <div class=" col-span-2 max-w-max w-auto py-2 px-10 text-4xl font-bold bg-yellow-cos text-white rounded-xl justify-self-center">2020</div>

    <div class="border-r-4 border-yellow-cos py-8 px-8 ">
        <boardEx class="mx-auto max-w-max w-auto " v-bind=IT3K_2020 />
    </div>
    <div class="border-l-4 border-yellow-cos" />

    <div class=" border-r-4 border-yellow-cos "/>
    <div class=" -mt-96 border-l-4 border-yellow-cos py-8 px-8 pt-8">
        <boardEx class="mx-auto" v-bind=OpenHouseIT />
    </div>

    <div class=" col-span-2 max-w-max w-auto py-2 px-10 text-4xl font-bold bg-yellow-cos text-white rounded-xl justify-self-center">2019</div>
    
    <div class=" border-r-4 border-yellow-cos py-8 px-8 ">
        <boardEx class="mx-auto" v-bind=Python />
    </div>
    <div class=" border-l-4 border-yellow-cos "/>
    
    <div class=" border-r-4 border-yellow-cos "/>
    <div class=" -mt-96 border-l-4 border-yellow-cos py-8 px-8 pt-8">
        <boardEx class="mx-auto" v-bind=IT3K_2019 />
    </div>

    <div class=" col-span-2 max-w-max w-auto py-2 px-10 text-4xl font-bold bg-yellow-cos text-white rounded-xl justify-self-center">2018</div>

    <div class=" border-r-4 border-yellow-cos py-8 px-8 ">
        <boardEx class="mx-auto" v-bind=Python />
    </div>
    <div class=" border-l-4 border-yellow-cos "/>
    
    <div class=" border-r-4 border-yellow-cos "/>
    <div class=" -mt-96 border-l-4 border-yellow-cos py-8 px-8 pt-8">
        <boardEx class="mx-auto" v-bind=IT3K_2019 />
    </div>

  </div>

</template>

<script>
import boardEx from './boardEX.vue'
export default {
    data(){
      return {
        IT3K_2020 :this.$store.getters.getInfo('IT3K_2020'),
        Python:this.$store.getters.getInfo('Python'),
        OpenHouseIT:this.$store.getters.getInfo('OpenHouse'),
        IT3K_2019:this.$store.getters.getInfo('IT3K_2019'),
      }    
    },
    components:{
      boardEx
    }
 
}
</script>

