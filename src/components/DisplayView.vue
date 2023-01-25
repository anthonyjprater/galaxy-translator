<script setup>
import ArtView from '@/components/ArtView.vue'
import { onMounted, ref } from 'vue'
import GalleryServices from '@/services/GalleryServices.js'

const images = ref(null)

onMounted(() => {
  // fetch event (by id) and set local data
  GalleryServices.getImages()
    .then((response) => response.json())
    .then((data) => (images.value = data.results))

    // .then(async (response) => {
    //       images.value = await response.json()
    //       // check for error response
    //       if (!response.ok) {
    //         // get error message from body or default to response statusText
    //         const error = (images && images.message) || response.statusText
    //         return Promise.reject(error)
    //       }
    //       this.items = images.results
    //       this.total = images.total
    //       console.log(images.results)
    //     })
    .catch((error) => {
      // this.errorMessage = error
      console.log(error)
      // console.error('There was an error!', error)
    })
})
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
      <div v-for="(item, index) in images" :key="index" class="figure__wrapper">
        <!-- each item uses json data received to provide links to the image, source, alt description, and users name and profile link  -->
        <figure class="figure">
          <ArtView :item="item" />
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

<style scoped>
.title__image {
  font-family: 'Galaxy';
  text-shadow: 4px 4px 5px #0000c9, 2px 2px 2px #482ff7, 2px 2px 8px #482ff7;
  color: #663399;
  width: 100%;
  text-align: center;
}
.image__page {
  background-color: #000;
}
.gallery {
  margin-bottom: 7rem;
}
h2 > .btn {
  border: 2px solid #0000c9;
  box-shadow: 3px 0 100px 1px #0000c9;
  font-family: 'Moonhouse';
}
.wrapper_gallery {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: space-around;
  font-family: 'Poppins';
}
.figure__wrapper {
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  align-items: center;
}
.figure {
  padding: 0.25rem;
  border: 2px solid #663399;
  border-radius: 8px;
  box-shadow: 1px 2px 2px 2px #fff;
}
.photo__credit {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 0.5rem;
}
.photo__credit a {
  color: #fff;
  text-decoration: none;
}
.photo__credit a:hover {
  text-shadow: 2px 4px 4px #ff8080;
  font-size: 1.1rem;
}
p {
  color: #fff;
}
/* On click of image component $emit to parent causes box-shadow appears around ALL figure elements with "live" class thru method "myFigure" by event listener */
.live {
  box-shadow: -3px 3px 15px 2px #fff;
}
</style>
