<template>
    <div>
        <div class="h1">
                    Thailand IT Contest Festival 2018 
        </div>
        <div class="flex flex-col lg:flex-row justify-start space-y-8 mt-7">
            
            <div class="flex  content-start justify-center  lg:px-10  ">
                <hooper class=" md:w-96 md:h-80  w-80  shadow-lg  " :autoPlay="true" :playSpeed="2000" :infiniteScroll="true" >
                    <slide v-for="limg in list_imgs" :key="limg.id" >
                        <img :src="limg.img"  class=" w-full h-full rounded-lg "/>
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
            </div>

            <div class="lg:ml-8 pb-6  flex flex-col items-center lg:items-start">
                <div class="text-base md:text-xl font-semi italic  ml-5 text-yellow-cos">
                    - Developed a medicine cabinet use RFID scanning system 
                </div>
                
                <button @click="toLink(gitNSC)"  type="button" class="button_link button-link-transition mt-5 p-2  w-52 ">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-10 inline">
                        <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0012 .3"/>
                    </svg>
                    <div class="text-lg inline ">GitHub</div>
                </button>
                
                
            </div>
            
        </div>
    </div>
    
</template>

<script>
import { Hooper, Slide,Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
    data(){
        return{
            gitNSC :'https://github.com/poom9091/NSC_medicine-cabinet-use-RFID-scanning',
            list_imgs:[
                {img:require('../assets/NSC/NSC_1.jpg')},
                {img:require('../assets/NSC/NSC_2.jpg')},
                {img:require('../assets/NSC/NSC_3.jpg')}
            ]
        }
    },
    components:{
       Hooper,
        Slide,
        HooperNavigation
    },
    methods:{
        toLink(link){
         window.location.href = link;
        }
    }
    
}
</script>

<style>
    
</style>