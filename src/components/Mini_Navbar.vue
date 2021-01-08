<template>
 <div class="m-5">


  <transition name="slideAni" >
    <button @click="show = !show" v-if="!show" class="fixed bottom-0 right-0 mb-7 p-1 bg-yellow-cos rounded-l-lg" @>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"  class=" fill-current text-darkblue-cos icon-size-nav ">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </button>

    <div v-if="show" class="fixed bottom-0 right-0 mb-7 p-1 bg-yellow-cos rounded-l-lg w-4/6 ">
        <div class=" flex flex-row-reverse space-x-8 space-x-reverse">
            <button @click="show = !show" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class=" text-darkblue-cos icon-size-nav">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" text-darkblue-cos icon-size-nav">
                    <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                </svg>
            </button>

            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"  class=" text-darkblue-cos icon-size-nav">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
            </button>

  
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class=" text-darkblue-cos icon-size-nav">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
  
  </transition>

 </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    }
}
</script>

<style>
.slideAni-enter-active {
  animation: fadeRight .3s;
}
.slideAni-leave-active {
  animation: fadeRight .3s reverse ;
}
@keyframes fadeRight  {
  0% {
   opacity: 0;
   transform: translate(20px) ;
  }
  100% {
      opacity: 1;
    transform: translateX(0);
  }
}
</style>