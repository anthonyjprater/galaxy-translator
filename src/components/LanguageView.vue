<script setup>
import { ref } from 'vue'

defineProps({
  languages: {
    type: Object,
    required: true,
  },
})

const isOpen = ref([])

function toggleAccordion(index) {
  if (isOpen.value.includes(index)) {
    isOpen.value = isOpen.value.filter((i) => i !== index)
    return
  }
  isOpen.value.push(index)
}
</script>

<template>
  <div id="accordion" class="accordion-container">
    <div
      v-for="(post, index) in languages.posts"
      :key="index"
      :class="['accordion', { 'is-open': isOpen.includes(index) }]"
    >
      <div class="accordion-header" @click="toggleAccordion(index)">
        <button v-if="!isOpen.includes(index)" class="accordion__toggle--open">
          {{ post.language }}
        </button>
        <button v-else class="accordion__toggle--closed">
          {{ post.language }}
        </button>
      </div>
      <div
        v-if="isOpen.includes(index)"
        class="accordion__body--open"
        :class="post.class"
      >
        <div class="accordion__body--closed">
          <div class="accordion-content">
            {{ post.text }}
            <strong>{{ post.sub }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 0.5rem;
  margin: 1rem;
  padding: 0.5rem;
  min-height: 20rem;
}
.accordion__toggle--closed,
.accordion__toggle--open {
  border: 2px solid blue;
  box-shadow: 3px 0 100px 1px blue;
  font-family: 'Moonhouse';
  font-size: 1.25rem;
  color: #cbcbcb;
  padding: 0.5rem;
  min-width: 10rem;
  border-radius: 10px;
  background-color: #0000c9;
}
.accordion__toggle--closed,
.accordion__toggle--open:hover {
  border: 4px solid blue;
  box-shadow: 1px 1px 8px 1px #482ff7;
}
.accordion__toggle--closed,
.accordion__toggle--open:focus {
  border: 4px solid blue;
  box-shadow: 1px 1px 8px 1px #482ff7;
}
.accordion__body--closed {
  max-height: 0;
  margin: 2rem 0;
}
.blue {
  text-shadow: 1px 1px 25px #482ff7;
}
.green {
  text-shadow: 1px 1px 25px green;
}
.red {
  text-shadow: 1px 1px 25px #ff8080;
}
.accordion__body--open {
  color: #8f8f8f;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-family: sans-serif;
  padding-bottom: 2rem;
  margin: 1rem 0 2rem;
  height: 20rem;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;
}

.is-open {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .accordion__body--open {
    margin: 1rem 0 2rem;
  }
}
.accordion {
  margin-top: 0.25rem;
  padding: 0 2rem;
}
.accordion-content {
  font-family: 'Poppins';
  padding: 0.5rem;
  overflow: hidden;
}
.card {
  margin: 0.5rem;
  padding: 0.5rem 1rem 1rem;
}
.card-body {
  padding: 1.25rem;
}
.collapse {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}
.is-closed .collapse {
  max-height: 0;
}
</style>
