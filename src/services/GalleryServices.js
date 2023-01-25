export default {
  getImages() {
    return fetch(
      'https://api.unsplash.com/search/photos?query=star wars&per_page=12&client_id=PaHrfu4_q3NMgYkSbeKWbwn7QLzd8AQuzUtbVnBkafg'
    )
  },
}
