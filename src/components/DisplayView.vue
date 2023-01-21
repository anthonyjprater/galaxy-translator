<script setup>
import ArtView from '@/components/ArtView.vue'
</script>

<template>
  <main class="b-container gallery text-center py-5 mb-5">
    <h1
      class="display-4 title__image font-weight-bold pb-2 mt-4 mb-2 border-bottom"
    >
      Views of the Galactic Empire
    </h1>
    <!-- image gallery composed of images fetched by unsplash.com and iterated through with a v-for loop bound by the index key -->
    <div
      id="galleryWrapper"
      class="wrapper_gallery b-row align-content-around rounded pt-3"
    >
      <div v-for="(item, index) in items" :key="index" class="figure__wrapper">
        <!-- each item uses json data received to provide links to the image, source, alt description, and users name and profile link  -->
        <figure class="figure" @click="myFigure">
          <ArtView
            :src="item.urls.regular"
            :alt="item.alt_description"
            :title="item.description"
          />
        </figure>
        <br />
        <p class="photo__credit m-auto text-light">
          Photo by
          <a :href="item.user.links.self">{{ item.user.name }}</a> on
          <a :href="siteCredit">UnSplash</a>
        </p>
      </div>
    </div>
  </main>
</template>
