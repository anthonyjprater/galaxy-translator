<script setup></script>

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

@media (max-width: 700px) {
  textarea.form {
    max-width: 65vw;
  }

  textarea.form::placeholder {
    letter-spacing: 2px;
    line-height: 1.6;
  }
}
</style>
