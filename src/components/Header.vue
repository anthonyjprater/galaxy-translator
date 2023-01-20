<template>
    <header class="main">
      <nav class=" b-navbar navbar-expand-lg ">
        <div class="nav__wrapper b-container-fluid">
          <a class="b-navbar-brand shadow-large d-flex flex-wrap" href="#">
            <h1 class="logo mr-1 text-center b-container" data-toggle="tooltip" data-placement="top" title="A long time ago in a galaxy far, far away....">Galactic Translator</h1>
          </a>
          <!-- hamburger display based on media query also bound to isActive truthy class -->
          <button
            class="hamburger b-navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            :class="{active: isActive}"
            @click="myFilter"
          >
            Menu
            <div class="hamburger--close">
              <span class="bar b-navbar-toggler-icon" />
              <span class="bar b-navbar-toggler-icon" />
              <span class="bar b-navbar-toggler-icon" />
            </div>
          </button>
          <!-- binding a class based on the isActive truthy to the nav menu -->
          <div id="navbarsExample05" class="b-collapse navbar-collapse">
            <!-- router-link to nav for each main app vue -->
            <ul id="js-menu" class="nav-menu b-navbar-nav mx-auto" :class="{active: isActive}">
              <li class="b-nav-item mr-3 active">
                <router-link to="/" class="nav-link">
                  Home
                </router-link>
              </li>
              <li class="b-nav-item mr-3 dropdown">
                <router-link
                  id="dropdown05"
                  to="/translatorapp"
                  class="nav-link"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Translator
                </router-link>
              </li>
              <li class="b-nav-item mr-3">
                <router-link to="/gallery" class="nav-link">
                  Gallery
                </router-link>
              </li>
              <li class="b-nav-item mr-3">
                <router-link to="/philology" class="nav-link">
                  Philology
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr class="hr_rule col-12">
    </header>
  </template>
  