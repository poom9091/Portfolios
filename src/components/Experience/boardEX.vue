<template>
  <div class="relative flex flex-col bg-white-cos  max-w-max w-auto rounded-md pb-10">
      <div class=" bg-yellow-cos text-center text-white text-2xl font-bold rounded-t-md py-2 ">{{name}}</div>
       <div class="flex  content-start justify-center p-5 lg:px-10 ">
            <hooper class=" md:w-64 md:h-60 w-60  shadow-lg  " :infiniteScroll="true" >
                <slide v-for="limg in list_imgs" :key="limg.id" >
                    <img :src="limg.img"  class=" w-full h-full rounded-lg "/>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
        </div>
      <div v-for="text in texts" :key="text" class=" pl-8 text-lg md:text-lg italic text-darkblue-cos">{{text}}</div>
      <div class="absolute bottom-0 right-0  italic text-base m-2 text-yellow-500">{{date}}</div>
  </div>
</template>

<script>
import { Hooper, Slide,Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    props:['name','date','link','list_imgs','texts'],
    components:{
       Hooper,
        Slide,
        HooperNavigation
    },
}
</script>

<style>

</style>