import {getHomeHotSuggests} from '@/api/mock/home'
import { defineStore } from 'pinia'


const useHomeStore = defineStore("home", {
    state: () => ({
      hotSuggests: [],
      categories: []
    }),
    actions: {
      async fetchHotSuggestData() {
        this.hotSuggests = await getHomeHotSuggests()
      }
    }
  })
  
  export default useHomeStore