<script setup>
import { ref } from 'vue'

const isActive = ref(false)

function toggleNav(){
  isActive.value = !isActive.value
}
</script>

<template>
  <header class="main">
    <nav class="b-navbar navbar-expand-lg">
      <div class="nav__wrapper b-container-fluid">
        <a class="b-navbar-brand" href="#">
          <h1
            class="logo"
            data-toggle="tooltip"
            data-placement="top"
            title="A long time ago in a galaxy far, far away...."
          >
            Galactic Translator
          </h1>
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
          :class="{ active: isActive }"
          @click="toggleNav"
        >
          Menu
          <div class="hamburger--close">
            <span class="bar b-navbar-toggler-icon"></span>
            <span class="bar b-navbar-toggler-icon"></span>
            <span class="bar b-navbar-toggler-icon"></span>
          </div>
        </button>
        <!-- binding a class based on the isActive truthy to the nav menu -->
        <div id="navbarsExample05" class="b-collapse navbar-collapse">
          <!-- router-link to nav for each main app vue -->
          <ul
            id="js-menu"
            class="nav-menu b-navbar-nav mx-auto"
            :class="{ active: isActive }"
          >
            <li class="b-nav-item mr-3 active">
              <router-link to="/" class="nav-link"> Home </router-link>
            </li>
            <li class="b-nav-item mr-3 dropdown">
              <router-link
                id="dropdown05"
                to="/translator"
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
    <hr class="hr_rule col-12" />
  </header>
</template>

<style scoped>

@media (max-width:700px) {
  .logo {
    word-wrap: break-word;
    text-align: center;
    max-width: 150px;
    letter-spacing: 1px;
  }
}

h1 {
  font-size: 1.5rem;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}

header {
  padding: 0.5rem 0rem;
}

nav {
  padding: 1rem;
}
.hr_rule {
  border-top: 2px solid #fff;
}
.nav__wrapper {
  display: flex;
  justify-content: space-between;
}
.logo {
  /* font-family: 'Galaxy', sans-serif; */
  color: red;
  text-shadow: 2px 2px 2px #ff8080, 0 0 2px #482ff7, 0 0 2px #482ff7;
  font-family: SF Distant Galaxy Outline;
  transition: text-shadow 250ms ease, color 250ms ease;
}
.logo:hover,
.logo:focus {
  color: #fff;
  text-shadow: 1px 1px 0px gold, 0 0 0px yellow, 0 0 0px yellow;
  border-radius: 8px;
  font-size: 1.5rem;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}
.b-nav-item {
  font-family: 'Moonhouse';
  font-size: 1.25rem;
  padding: 0.25rem;
  letter-spacing: 0.1rem;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px #2f2f2f;
}
.b-nav-item:hover {
  box-shadow: 3px 3px 3px #bbb;
}
.b-nav-item .nav-link {
  color: #6f6f6f;
  text-shadow: 1px 1px 0px #fff;
  letter-spacing: 3px;
}
.b-nav-item .nav-link:hover {
  color: #fff;
  text-shadow: 2px 2px 2px #482ff7;
}
.menu {
  display: flex;
}
/* For future additional language translations
    div > .dropdown-item {
    color: #000;
    font-size: 1.5rem;
    font-weight: 900;
    font-family: 'Moonhouse';
    text-shadow: 1px 1px 1px #bbb;
} */
div > .dropdown-item:hover {
  color: #bbb;
  text-shadow: 2px 2px 2px #482ff7;
  background-color: #000;
  line-height: 1.5rem;
}
.b-navbar-toggle {
  border: 1px solid #482ff7;
  border-radius: 10px;
  box-shadow: -1px -1px 3px 1px #482ff7;
}
.b-navbar-toggle .navbar-toggler-icon {
  color: #0000c9;
  width: auto;
}
.hamburger {
  display: none;
  background-color: #000;
  color: #482ff7;
  font-weight: 900;
  font-family: 'Moonhouse';
  letter-spacing: 0.2rem;
  border-radius: 5px;
  box-shadow: 4px 2px 8px 1px #aaa;
  transition: box-shadow 250ms ease-in;
  font-size: 1.1em;
  text-shadow: 1px 1px 1px #aaa;
}
.hamburger:hover {
  box-shadow: 2px 2px 8px 1px #0000c9;
}
.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #ccc;
}
@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 8rem;
    flex-direction: column;
    justify-content: space-between;
    background-color: #000;
    padding: 2rem;
    height: 50vh;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 200, 0.5);
  }
  .nav-menu.active {
    left: 0;
    z-index: 2;
  }
  .menu {
    margin: 1rem 0;
    padding-bottom: 1rem;
  }
  .hamburger {
    display: flex;
    cursor: pointer;
    min-width: 8rem;
    align-items: center;
    justify-content: space-around;
  }
}
.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}
/* translating hamburger bars to light sabers */
.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
  background-color: #000;
  box-shadow: 1px 1px 3px 1px red;
}
.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
  background-color: #000;
  box-shadow: 1px 1px 3px 1px blue;
}
.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
