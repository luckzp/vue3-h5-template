import {getHomeHotSuggests, getHomeCategories} from '@/api/mock/home'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useHomeStore = defineStore("home", () => {

  const hotSuggests = ref(null)
  const categories = ref(null)
  const currentPage = ref(1)

  async function fetchHotSuggestData() {
    hotSuggests.value = await getHomeHotSuggests()
  }


  async function fetchCategoriesData() {
    categories.value = await getHomeCategories()
  }
  
  return {
    hotSuggests,
    categories,
    fetchCategoriesData,
    fetchHotSuggestData
  }
  })
  
  export default useHomeStore