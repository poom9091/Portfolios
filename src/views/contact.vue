<template>
   <div class="bg-darkblue-cos">
   <transition name ="slide-fade" >
      <div v-if="show" class=" flex  flex-col lg:flex-row ">

         <div  class="h-screen w-full   md:w-5/6 mx-auto pt-20 pb-10 md:pt-28 px-12 flex flex-col justify-around ">
            <div class="h2 text-5xl  border-white border-b-8 pb-6 uppercase">
               Contact
            </div>
            <div class=" space-y-2 md:ml-10 text-lg ">
               <div class="flex items-center hover:bg-hover-icon max-w-max w-auto p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="fill-current text-yellow-400 h-10">
                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <p class=" text-white text-base lg:text-xl p-2 italic font-bold">pubadee.kl@gmail.com</p>
               </div>
               <div class="flex items-center hover:bg-hover-icon max-w-max w-auto p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  class="fill-current text-yellow-400 h-10">
                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p class=" text-white text-base lg:text-xl p-2 italic font-bold">064 - 2696638</p>
               </div>
               <div class="flex items-center hover:bg-hover-icon max-w-max w-auto p-2 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="fill-current text-yellow-400 h-10">
                     <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  <p class=" text-white text-base lg:text-xl p-2 italic font-bold">Lamphun , Thailand</p>
               </div>
            </div>
            <div class="flex justify-evenly ">
               <button @click="toLink(facebook)" class=" hover:bg-yellow-cos rounded-lg p-3 px-5 group transition duration-150 ease-in-out transform hover:-translate-y-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-yellow-400 h-10 group-hover:text-white">
                     <path d="M24 12a12 12 0 10-13.9 12v-8.5h-3v-3.4h3V9.4c0-3 1.8-4.6 4.6-4.6l2.6.2v3h-1.5c-1.5 0-2 .9-2 1.8v2.3h3.4l-.5 3.4h-2.8V24A12 12 0 0024 12.1z"/>
                  </svg>
               </button>
               <button @click="toLink(ig)" class=" hover:bg-yellow-cos rounded-lg p-3 px-5 group transition duration-150 ease-in-out transform hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current text-yellow-400 h-10 group-hover:text-white">
                     <path d="M12 0H7C5.9.2 5 .4 4.2.7c-.7.3-1.4.7-2 1.4S.8 3.4.5 4.1c-.3.8-.5 1.7-.5 3a83.6 83.6 0 00.5 12.8c.3.7.7 1.4 1.4 2 .7.8 1.3 1.2 2.1 1.5.8.3 1.7.5 3 .5a83.6 83.6 0 0012.8-.5c.7-.3 1.4-.7 2-1.4.8-.7 1.2-1.3 1.5-2.1.3-.8.5-1.7.5-3a83.6 83.6 0 00-.5-12.8c-.3-.7-.7-1.4-1.4-2-.7-.8-1.3-1.2-2.1-1.5-.8-.3-1.7-.5-3-.5L12 0zm0 2.2h4.8c1.2 0 1.9.3 2.3.4.5.3 1 .5 1.4 1 .4.4.6.8.9 1.3.1.4.3 1 .4 2.2a84 84 0 01-.5 12c-.2.5-.4 1-.9 1.4-.4.4-.8.6-1.3.9-.5.1-1.1.3-2.3.4a84.5 84.5 0 01-12-.5c-.5-.2-.9-.4-1.3-.9-.4-.4-.7-.8-.9-1.3-.2-.5-.4-1.1-.4-2.3V12 7c0-1.1.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4H12zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm7.8-10.4a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
                  </svg>
               </button>
               <button @click="toLink(linkin)" class=" hover:bg-yellow-cos rounded-lg p-3 px-5 group transition duration-150 ease-in-out transform hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current text-yellow-400 h-10 group-hover:text-white ">
                     <path d="M20.4 20.5H17v-5.6c0-1.3 0-3-1.9-3-1.8 0-2 1.4-2 2.9v5.7H9.3V9h3.4v1.6c.5-1 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.3zm-15-13a2 2 0 110-4.2 2 2 0 010 4.1zm1.7 13H3.6V9H7v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7z"/>
                  </svg>
               </button>
               <button @click="toLink(git)" class=" hover:bg-yellow-cos rounded-lg p-3 px-5 group transition duration-150 ease-in-out transform hover:-translate-y-1">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current text-yellow-400 h-10 group-hover:text-white ">
                     <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0012 .3"/>
                  </svg>
               </button>
            </div>
         </div>
         <Email/>
      </div>
   </transition>
   </div>
</template>

<script>
import Email from '../components/Contact/Email.vue'
export default {
   components:{
      Email
   },
   data(){
      return{
         facebook:'https://www.facebook.com/pubadee.klinocha/',
         ig: 'https://www.instagram.com/pubadee_nz91/',
         git: 'https://github.com/poom9091',
         linkin:'https://www.linkedin.com/in/pubadee-klinocha-6b45631b7/',
         show:false
      }
   },
   mounted(){
      this.show=true
   },
   methods:{
    toLink(link) {
      window.location.href = link;
    },
   },
}
</script>

<style>
   .slide-fade-enter-active {
        transition: all .8s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to  {
        transform: translateX(-10px);
        opacity: 0;
    }
</style>