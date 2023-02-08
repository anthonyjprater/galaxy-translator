export default {
  getTranslation(language,userInput) {
    return fetch(
      `https://api.funtranslations.com/translate/${language}.json?text=${userInput}`
    )
  },
}
