<template>
  <transition :name="slide">
    <div
      v-if="showS"
      class="relative flex flex-col bg-white-cos rounded-md pb-10 w-auto"
    >
      <div
        class=" bg-yellow-cos text-center text-white text-2xl font-bold rounded-t-md p-2 "
      >
        {{ name }}
      </div>
      <div class="flex  content-start justify-center p-5 lg:px-10 ">
        <div v-if="list_imgs.length == '1'">
          <img :src="list_imgs[0].img" class=" w-full h-full rounded-lg " />
        </div>
        <hooper
          v-else
          class=" lg:w-80  lg:h-72 w-64   shadow-lg  "
          :infiniteScroll="true"
        >
          <slide v-for="limg in list_imgs" :key="limg.id">
            <img :src="limg.img" class=" w-full h-full rounded-lg " />
          </slide>

          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
      <div
        v-for="text in texts"
        :key="text"
        class=" px-8  text-lg md:text-lg italic text-darkblue-cos  w-auto"
      >
        {{ text }}
      </div>
      <div
        class="absolute bottom-0 right-0  italic text-base m-2 mr-5 text-yellow-500"
      >
        {{ date }}
      </div>
    </div>
  </transition>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  props: ["name", "date", "link", "list_imgs", "texts", "slide"],
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      showS: false,
    };
  },
  mounted() {
    this.showS = true;
  },
};
</script>

<style>
.slide-R-enter-active {
  transition: all 0.8s ease;
  transition-delay: 250ms;
}
.slide-R-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition-delay: 250ms;
}
.slide-R-enter,
.slide-R-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
.slide-L-enter-active {
  transition: all 0.8s ease;
  transition-delay: 250ms;
}
.slide-L-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition-delay: 250ms;
}
.slide-L-enter,
.slide-L-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
