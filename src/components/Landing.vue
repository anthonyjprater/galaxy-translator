<script setup>

</script>

<template>
    <main class="main container align-items-center justify-content-center">
      <div class="row landing">
        <div class="stars position-absolute col-12 overflow-hidden" />
        <div class="twinkling position-absolute col-12 overflow-hidden" />
        <div class="jumbotron jumbotron-fluid bg-transparent text-warning container text-center col-12">
          <h1 class="landing__header justify-content-between text-center col-12 mb-5" data-toggle="tooltip" data-placement="top" title="A long time ago in a galaxy far, far away....">
            Galactic Translator
          </h1>
          <p class="hero__runner text-center mb-5 mt-5">
            A Project for UW HTML 300 Course
          </p>
          <NuxtLink to="/translatorapp" class="landing__link text-center col-4 btn btn-warning py-1 px-4">
            {{ text }}
          </NuxtLink>
        </div>
      </div>
      <router-view />
      <audio class="landing__audio" autoplay loop>
        <source src="@/assets/audio/the-force-theme.mp3">
        <p>Your browser doesn't support HTML5 audio. Here is a <a href="https://soundcloud.com/faroutofficial/far-out-the-force-theme-star-wars-cover">link to the audio</a> instead.</p>
      </audio>
    </main>
  </template>
