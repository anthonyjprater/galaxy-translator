<script setup></script>

<template>
  <div>
    <img
      class="gallery__image"
      :src="src"
      :alt="alt"
      :title="title"
      :class="{ active: isActive }"
      @click="myImage();$emit('click');"
    />
  </div>
</template>


<style scoped>
img {
  float: left;
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.active {
  box-shadow: 3px -3px 15px 2px #a0f, 3px -3px 30px 2px #f0a;
}
</style>