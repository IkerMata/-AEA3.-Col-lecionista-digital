// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('favorites', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  //actions: {
    //increment() {
      //this.count++
    //},
  //},
})

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  actions: {
    addFavorite(item) {
      if (!this.favorites.some(f => f.id === item.id)) this.favorites.push(item)
    },
    removeFavorite(id) {
      this.favorites = this.favorites.filter(f => f.id !== id)
    }
  },
  getters: {
    isFavorite: (state) => (id) => state.favorites.some(f => f.id === id)
  }
})