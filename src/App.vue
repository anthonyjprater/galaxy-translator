<script setup>
import './assets/fonts/Moonhouse.ttf'
import './assets/fonts/SFDistantGalaxyOutline.woff2'
import './assets/fonts/SFDistantGalaxyOutline.woff'
import './assets/fonts/SFDistantGalaxyOutline.eot'
import './assets/fonts/SFDistantGalaxyOutline.ttf'
import './assets/fonts/Poppins-Medium.ttf'
import './assets/fonts/Poppins-Bold.ttf'
</script>

<template>
  <div id="layout">
    <RouterView />
  </div>
</template>

<style>
@font-face {
  font-family: 'Moonhouse';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/Moonhouse.ttf') format('truetype');
}
@font-face {
  font-family: 'Galaxy';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/SFDistantGalaxyOutline.woff2') format('woff2'),
    url('./assets/fonts/SFDistantGalaxyOutline.woff') format('woff'),
    url('./assets/fonts/SFDistantGalaxyOutline.eot') format('embedded-opentype'),
    url('./assets/fonts/SFDistantGalaxyOutline.ttf') format('truetype');
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/Poppins-Medium.ttf') format('truetype');
}
@font-face {
  font-family: 'PoppinsBold';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./assets/fonts/Poppins-Bold.ttf') format('truetype');
}
</style>
