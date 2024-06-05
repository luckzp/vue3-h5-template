import {getHomeHotSuggests, getHomeCategories, getHomeHouselist} from '@/api/mock/home'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useHomeStore = defineStore("home", () => {

  const hotSuggests = ref(null)
  const categories = ref(null)
  const currentPage = ref(1)
  const houselist = ref([])

  async function fetchHotSuggestData() {
    const res = await getHomeHotSuggests()
    hotSuggests.value = res.data
  }


  async function fetchCategoriesData() {
    const res = await getHomeCategories()
    categories.value = res.data
  }

  async function fetchHouselistData() {
    const res = await getHomeHouselist(currentPage.value)
    this.houselist.push(...res.data)
    currentPage.value++  
  }
  
  return {
    hotSuggests,
    categories,
    houselist,
    currentPage,
    fetchCategoriesData,
    fetchHotSuggestData,
    fetchHouselistData
  }
  })
  
  export default useHomeStore