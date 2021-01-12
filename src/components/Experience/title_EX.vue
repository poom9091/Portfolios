<template>
  <div>
      <boardEx v-bind=IT3K2020 />
  </div>
</template>

<script>
import boardEx from './boardEX.vue'
export default {
    data(){
      return{
        IT3K2020:{
          name:'IT3K 2020',
          date:'Feb 2020',
          link:'',
          list_imgs:[
                {img:require('../../assets/NSC/NSC_1.jpg')},
                {img:require('../../assets/NSC/NSC_2.jpg')},
                {img:require('../../assets/NSC/NSC_3.jpg')}
          ],
          texts : ['- Entertrain IT KMUTNB',''],
        },
        OpenHouseIT:{
          name:'OpenHouse IT KMUTNB',
          date:'',
          link:'',
          list_imgs:[
                {img:require('../../assets/NSC/NSC_1.jpg')},
                {img:require('../../assets/NSC/NSC_2.jpg')},
                {img:require('../../assets/NSC/NSC_3.jpg')}
          ],
          texts : ['- Teacher Assistant ','- Educated about students in python programming and how to use library PyGame.'],
        },

      }
    },
    name:'EXtitale',
    components:{
      boardEx
    }
}
</script>

<style>

</style>