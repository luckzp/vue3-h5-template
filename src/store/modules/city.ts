import {getCityAll} from '@/api/mock/city'
import { defineStore } from 'pinia'


// 定义 allCities 对象的接口
interface City {
    title: string;
    // 其他可能的属性
}

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: [] as City[],
    currentCity: {
        cityName: "广州"
      }
  }),
  actions: {
    async fetchAllCitiesData() {
      const data = await getCityAll()
      console.log(data)
      this.allCities = data
    }
  }
})

export default useCityStore;