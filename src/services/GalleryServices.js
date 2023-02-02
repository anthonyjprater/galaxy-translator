export default {
  getImages() {
    const searchArray = [
      'vader',
      'saber',
      'force',
      'ship',
      'sith',
      'jedi',
      'yoda',
      'sword',
      'laser',
      'death star',
      'trooper',
    ]
    const randomQuery =
      searchArray[Math.floor(Math.random() * searchArray.length)]

    return fetch(
      `https://api.unsplash.com/search/photos?query=star wars ${randomQuery}&per_page=12&client_id=PaHrfu4_q3NMgYkSbeKWbwn7QLzd8AQuzUtbVnBkafg`
    )
  },
}
