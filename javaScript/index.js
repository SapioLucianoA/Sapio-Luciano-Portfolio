const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Wolrd!',
      english: false,
      sun:false,
    }
  },
  mounted() {

    if (localStorage.english) {
      this.english = JSON.parse(localStorage.english);
    }
    if (localStorage.sun) {
      this.sun = JSON.parse(localStorage.sun);
    }
  },
  watch: {

    english(newVal) {
      localStorage.english = JSON.stringify(newVal);
    },
    sun(newVal) {
      localStorage.sun = JSON.stringify(newVal);
    },
  },

  methods: {
    cambioDeLenguaje(){
      this.english = !this.english;
      
      console.log(this.english)
    },
    cambioDeColor(){
      this.sun = !this.sun;
      console.log(this.sun)
    },
  }
}).mount('#app')