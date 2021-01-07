<template>
<div class="" >
    <transition name ="slide-fade " >
        <div v-if="show" >
            <p class=" text-yellow-cos font-mono text-2xl md:text-3xl ">Hello, my name is </p>
            <h1  class=" text-gray-cos text-7xl font-black mt-5 mb-4  ">Pubadee <br class="md:hidden">Klinocha</h1>
            <p class="text-yellow-cos font-mono text-xl tracking-tighter leading-6 md:text-2xl"> I'm 3rd year studying at King Mongkut's University of 
                <br class="sm:hidden"> Technology North Bangkok in Information Technology  
            </p> 
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data(){
        return{
        show: false
        }
    },
    mounted(){
       this.show=true 
    }
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
        transform: translateX(10px);
        opacity: 0;
    }
  
</style>