<template>
    <div>
        <div class="h1">
            {{name}}
        </div>
        <div class="flex flex-col lg:flex-row justify-start space-y-8 mt-7">
            <div class="flex  content-start justify-center  lg:px-10  ">
                <hooper class=" md:w-96 md:h-80  w-80  shadow-lg  "  :infiniteScroll="true" >
                    <slide v-for="limg in list_imgs" :key="limg.id" >
                        <img :src="limg.img"  class=" w-full h-full rounded-lg "/>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
            </div>
            
            <div class="lg:ml-8 pb-6  flex flex-col items-center lg:items-start">
                <div v-for="str in texts" :key="str.id" class="text-base md:text-xl font-semi italic  ml-5 text-darkblue-cos">
                    {{str}} 
                </div>
                
                <button @click="toLink(link)"  type="button" class="button_link button-link-transition mt-5 p-2  w-52 ">
                    <svg v-if="name_buttom=='GitHub' " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 inline">
                        <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0012 .3"/>
                    </svg>
                    <svg v-if="name_buttom=='YouTube'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-10 inline">
                        <path d="M23.5 6.2a3 3 0 00-2-2c-2-.6-9.5-.6-9.5-.6s-7.5 0-9.4.5a3 3 0 00-2 2.1A31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.5a3 3 0 002.1-2.1A31.3 31.3 0 0024 12a31.3 31.3 0 00-.5-5.8zM9.6 15.6V8.4L16 12z"/>
                    </svg>
                    <div class="text-lg inline ">{{name_buttom}}</div>
                </button>
            </div>
        </div>
    </div>
    
</template>

<script>
import { Hooper, Slide,Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    name:'event',
    props:['name','link','texts','list_imgs','name_buttom','logo'],
    components:{
       Hooper,
        Slide,
        HooperNavigation
    },
    methods:{
        toLink(link){
         window.location.href = link;
        },
        Check_button(buttom){
            return document.write('Git' in buttom); 
        }
    }  
}
</script>

<style>
    
</style>