<template>
  <div class=" flex flex-col  lg:grid  lg:grid-cols-2 justify-items-stretch  max-w-max pb-16 pt-10">
    <div class=" col-span-2 max-w-max w-auto py-2 px-10 text-4xl font-bold bg-yellow-cos text-white rounded-r-lg  lg:rounded-xl justify-self-center">2020</div>

    <div class=" border-l-4 lg:border-l-0 lg:border-r-4 border-yellow-cos px-3 md:px-8  py-8 ">
      
        <boardEx class="mx-auto" v-bind=IT3K_2020 />
    </div>
    <div class="border-l-4 border-yellow-cos in" />

    <div class=" border-r-4 border-yellow-cos "/>
    <div class=" lg:-mt-96 border-l-4 border-yellow-cos py-8 px-3 md:px-8 pt-8">
        <boardEx class="mx-auto" v-bind=OpenHouseIT />
    </div>

    <div class=" col-span-2 max-w-max w-auto py-2 px-10 text-4xl font-bold bg-yellow-cos text-white rounded-r-lg  lg:rounded-xl justify-self-center">2019</div>
    
    <div class=" border-l-4 lg:border-l-0 lg:border-r-4 border-yellow-cos py-8 px-3 md:px-8 ">
        <boardEx class="mx-auto" v-bind=Python />
    </div>
    <div class=" border-l-4 border-yellow-cos "/>
    
    <div class=" border-r-4 border-yellow-cos "/>
    <div class=" lg:-mt-96 border-l-4 border-yellow-cos py-8 px-3 md:px-8 ">
        <boardEx class="mx-auto" v-bind=IT3K_2019 />
    </div>

    <div class=" col-span-2 max-w-max w-auto py-2 px-10 text-4xl font-bold bg-yellow-cos text-white rounded-r-lg  lg:rounded-xl justify-self-center">2018</div>

    <div class=" border-l-4 lg:border-l-0 lg:border-r-4 border-yellow-cos py-8 px-3 md:px-8 ">
        <boardEx class="mx-auto" v-bind=Nsc />
    </div>
    <div class=" border-l-4 border-yellow-cos "/>
    
    <div class=" border-r-4 border-yellow-cos "/>
    <div class=" lg:-mt-96 border-l-4 border-yellow-cos py-8 px-3 md:px-8 ">
        <boardEx class="mx-auto" v-bind=Intren />
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
        Intren:this.$store.getters.getInfo('Intern'),
        Nsc:this.$store.getters.getInfo('Nsc'),
        show:false
      }    
    },
    components:{
      boardEx
    },
    
    
 
}
</script>

