<script setup>
import HeaderView from '@/components/HeaderView.vue'
import InterfaceView from '@/components/InterfaceView.vue'
import FooterView from '@/components/FooterView.vue'
</script>

<template>
  <div>
    <HeaderView />
    <InterfaceView />
    <FooterView />
  </div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
body {
  background-color: #000;
}
</style>
