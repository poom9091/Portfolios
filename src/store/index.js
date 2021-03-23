import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datas:[
      {
        id:'Devops',
        name:'DevSecOps Transformation & Technologies',
        date:'March 2021',
        link:'',
        slide:'slide-L',
        list_imgs:[
              {img:require('../assets/cer/Devops_cer.jpg')},
        ],
        texts : ['- Certificate DevSecOps Transformation & Technologies from Skooldio '],
      },
      {
        id:'Docker',
        name:'Introduction to Docker',
        date:'March 2021',
        link:'',
        slide:'slide-R',
        list_imgs:[
              {img:require('../assets/cer/Docker_cer.jpg')},
        ],
        texts : ['- Certificate Introduction to Docker from Skooldio '],
    },
      {
          id:'Python',
          name:'2nd generation Python Programming',
          date:'July 2019',
          link:'',
          slide:'slide-R',
          list_imgs:[
                {img:require('../assets/python/python_1.jpg')},
                {img:require('../assets/python/python_2.jpg')},
                {img:require('../assets/python/python_3.jpg')}
          ],
          texts : ['- Teacher Assistant ','- Educated about students in python programming and how to use library PyGame.'],
      },

     
      {
          id:'OpenHouse',
          name:'OpenHouse IT KMUTNB',
          date:'February 2020',
          link:'',
          slide:'slide-L',
          list_imgs:[
                {img:require('../assets/OpenHouse/openhouse_3.jpg')},
                {img:require('../assets/OpenHouse/openhouse_1.jpg')},
                {img:require('../assets/OpenHouse/openhouse_2.jpg')}
          ],
          texts : ['- Teacher Assistant ','- Educated about students in python programming and how to use library PyGame.'],
        
      },
      {
          id:'IT3K_2020',
          name:'IT3K 2020',
          date:'January 2020',
          link:'',
          slide:'slide-R',
          list_imgs:[
                {img:require('../assets/IT3K_2020/IT3K_20_2.jpg')},
                {img:require('../assets/IT3K_2020/IT3K_20_1.jpg')},
                {img:require('../assets/IT3K_2020/IT3K_20_3.jpg')},
                {img:require('../assets/IT3K_2020/IT3K_20_4.jpg')}
          ],
          texts : ['- Entertain KMUTNB '],
      },
      {
          id:'IT3K_2019',
          name:'IT3K 2019',
          date:'February  2019',
          link:'',
          slide:'slide-L',
          list_imgs:[
                {img:require('../assets/IT3K_2019/IT3K_2019_1.jpg')},
                {img:require('../assets/IT3K_2019/IT3K_2019_3.jpg')},
                {img:require('../assets/IT3K_2019/IT3K_2019_2.jpg')},
          ],
          texts : ['- Entertain KMUTNB '],
        
      },
      {
          id:'Nsc',
          name : 'Thailand IT Contest Festival 2018 ',
          date:'March 2018',
          link :'https://github.com/poom9091/NSC_medicine-cabinet-use-RFID-scanning',
          slide:'slide-R',
          texts : ['- Developed a medicine cabinet use RFID scanning system'],
          list_imgs:[
              {img:require('../assets/NSC/NSC_1.jpg')},
              {img:require('../assets/NSC/NSC_2.jpg')},
              {img:require('../assets/NSC/NSC_3.jpg')}
          ],
          name_buttom:'GitHub',
      },
      {
          id : 'Intern',
          name : 'Intern at Chiangmai Technical College  in Information Technology',
          date:'February 2018',
          link :'https://www.youtube.com/playlist?list=PLC4CZjlaBNKuTKzLGrugiwaIW3aOGnFwS',
          slide:'slide-L',
          texts : ['- Teacher Assistant','- Developed a weather detector to analyze weather for farmers to present to the Centerfor Information Technology and Vocational Workforce. In making videos on YouTube'],
          list_imgs:[
              {img:require('../assets/Intern/Intern_1.jpg')},
              {img:require('../assets/Intern/Intern_2.jpg')},
              {img:require('../assets/Intern/Intern_3.jpg')}
          ],
          name_buttom:'YouTube',
      },
      
    ]
  },

  getters:{
    getInfo:(state)=>(id) =>{
      return state.datas.find(data => data.id === id )
    }
  },
  mutations: {
  },
  actions: {
   
  },
  modules: {
  }
})
