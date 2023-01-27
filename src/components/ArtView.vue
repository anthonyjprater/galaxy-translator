<script setup>
import { ref } from 'vue'

defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  }
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
      :class="[{ active: isActive }, index % 2 === 0 ? 'red' : 'green']"
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

.gallery__image:hover {
  box-shadow: 3px -3px 15px 2px #a0f, 3px -3px 30px 2px #f0a;
}

.active.green {
  box-shadow: 3px -3px 15px 2px #af0, 3px -3px 30px 2px #0fa;
}

.active.red {
  box-shadow: 3px -3px 15px 2px #0af, 3px -3px 30px 2px #a0f;
}
</style>
