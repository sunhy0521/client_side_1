<template>
  <div class="ResPic">
    <h1>{{ msg }}</h1>
    <button @click="on_flag=!on_flag;" >change</button>
    <svg v-if="on_flag" class="logored">
    </svg>
    <svg v-if="!on_flag" class="logogreen">
    </svg>
  </div>

</template>

<script>
export default {
  name: 'ResPic',
  props: {
    msg: String
  },
  data: ()=>{
      return {
        on_flag: {
            type: Boolean,
            default: true
        }
      }
  },
  method: {
       click_b(){
           this.on_flag=!this.on_flag;
           console.log("click")
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@-webkit-keyframes breathing {
  0% {
        width: 100px;
        height: 100px;
  }

  50% {
        width: 125px;
        height: 125px;
  }
  100% {
        width: 100px;
        height: 100px;
  }
}
.logored {
  display: block;
  fill: green;
  width: 100px;
  height: 100px;
  background-image: url('walk.svg');
  background-color: #FE7F88;
  fill: #FE7F88;
  border-radius: 50%;
  background-size: 100px 200px;
  -webkit-animation: none;
}
.logogreen {
  display: block;
  fill: green;
  width: 100px;
  height: 100px;
  background-image: url('walk.svg');
  background-color: rgb(127, 254, 169);
  fill: rgb(127, 254, 159);
  background-size: 100px 100px;
  border-radius: 50%;
  -webkit-animation: breathing 1s ease-out infinite normal;
}
</style>
