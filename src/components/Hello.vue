<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essentiddddddddal Links</h2>
    <ul>
      <li><router-link :to="{name:'detail',params:{id:123}}"> detail </router-link></li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    msg: 'Welcome to Your Vue.js App12321123'  
    }
  }
}
</script>