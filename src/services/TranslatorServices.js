export default {
    getTranslation(userInput) {
      return fetch(
        `https://api.funtranslations.com/translate/yoda.json?text=${userInput}`
      )
    },
  }