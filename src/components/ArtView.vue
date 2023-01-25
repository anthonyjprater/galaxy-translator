<script setup>
import { ref } from 'vue'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const isActive = ref(false)
</script>

<template>
  <div>
    <img
      class="gallery__image"
      :src="item.urls.regular"
      :alt="item.alt_description"
      :title="item.description"
      :class="{ active: isActive }"
      @click="isActive = !isActive"
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
