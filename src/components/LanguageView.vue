<script setup></script>

<template>
  <div id="accordion" class="accordion-container text-center">
    <div
      v-for="(post, index) in posts"
      :key="index"
      :class="['accordion', { 'is-open': isOpen.includes(index) }]"
    >
      <div class="accordion-header" @click="toggleAccordion(index)">
        <button
          v-if="!isOpen.includes(index)"
          class="accordion__toggle--open btn"
        >
          {{ post.language }}
        </button>
        <button v-else class="accordion__toggle--closed btn">
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
