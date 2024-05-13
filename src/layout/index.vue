<script setup lang="ts">
import tabbar from "@/components/Tabbar/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { useDarkMode } from "@/hooks/useToggleDarkMode";
import { computed } from "vue";
import { useRoute } from 'vue-router';

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
const route = useRoute()

</script>

<template>
  <div>
    <van-config-provider :theme="useDarkMode() ? 'dark' : 'light'">
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view>
      <tabbar />
    </van-config-provider>
  </div>
</template>
