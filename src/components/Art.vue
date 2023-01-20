<script setup>
</script>

<template>
    <div>
      <img
        class="gallery__image"
        :src="src"
        :alt="alt"
        :title="title"
        :class="{active: isActive}"
        @click="myImage(); $emit('click');"
      >
    </div>
  </template>