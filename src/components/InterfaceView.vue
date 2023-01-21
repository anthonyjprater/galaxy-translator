<template>
  <div class="translator__app container-fluid col-12">
    <div
      class="translator__app--wrapper row row-cols-1 row-cols-sm-2 justify-content-between align-items-center"
    >
      <!-- avatar image -->
      <aside class="col-12 col-sm-4 sidebar">
        <figure class="img">
          <img id="c3po" src="@/assets/images/c3po.jpg" class="avatar img-fluid">
        </figure>
      </aside>
      <!-- translator interface -->
      <section class="interface__wrapper container">
        <div class="row align-items-center">
          <main id="main-content" class="main-content col-12 rounded">
            <article
              class="translator col-12 d-flex flex-column justify-content-center align-items-center"
            >
              <h1 class="translator__heading">
                {{ title }}
              </h1>
              <div id="prompt" class="translator__prompt bubble">
                {{ prompt }}
              </div>
              <form action="" class="translator__form text-center my-3">
                <div id="userInput" class="bubble">
                  <textarea
                    id="ytext"
                    v-model="input"
                    debounce="500"
                    name="ytext"
                    cols="40"
                    rows="12"
                    class="form"
                    placeholder="Please type your text here so C-3P0 can translate it ... for you..."
                  />
                </div>
                <span id="outPut" class="bubble text-output">{{
                  translation
                }}</span>
                <button
                  id="translateButton"
                  type="button"
                  name="translate"
                  class="hidden btn btn-outline-light my-2 form__button"
                  @click.prevent="getTranslation()"
                >
                  {{ translationbutton }}
                </button>
              </form>
              <button
                id="newTranslation"
                class="btn btn-outline-light my-2 form__button"
                @click="freshStart()"
              >
                {{ newtranslationbutton }}
              </button>
            </article>
            <div class="holo" />
          </main>
        </div>
      </section>
    </div>
  </div>
</template>
