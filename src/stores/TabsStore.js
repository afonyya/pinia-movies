import { defineStore } from 'pinia';
import { TABS } from '../helpers/tabs';
import { ref } from 'vue';

export const useTabsStore = defineStore('tabsStore', () => {
  const tab = ref(TABS.FAVORITE);

  const setTab = (value) => {
    tab.value = value;
  };

  return {
    tab,
    setTab,
  };
});
