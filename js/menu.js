const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',


  } 
},
methods: {
  addClassActiveMenu(id){

    if(id == 1){
      const link1 = document.querySelector('.link1')
      const link2 = document.querySelector('.link2')
      const link3 =  document.querySelector('.link3')
      
      link1.classList.add('active')
      link2.classList.remove('active')
      link3.classList.remove('active')
    }

    if(id == 2){
      const link1 = document.querySelector('.link1')
      const link2 = document.querySelector('.link2')
      const link3 =  document.querySelector('.link3')
      
      link2.classList.add('active')
      link1.classList.remove('active')
      link3.classList.remove('active')
    }
    if(id == 3){
      const link1 = document.querySelector('.link1')
      const link2 = document.querySelector('.link2')
      const link3 =  document.querySelector('.link3')
      
      link3.classList.add('active')
      link2.classList.remove('active')
      link1.classList.remove('active')
    }
   



   
  }
},
  
 
}).mount('#menu')