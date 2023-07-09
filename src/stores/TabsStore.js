import { defineStore } from 'pinia';
import { TABS } from '../helpers/tabs';
import localStorageController from '../helpers/localStorageController';
import { ref, watch } from 'vue';

export const useTabsStore = defineStore('tabsStore', () => {
  const tab = ref(TABS.FAVORITE);

  const tabLS = localStorageController.tab.get();
  if (tabLS) {
    tab.value = tabLS;
  }
  watch(tab, (value) => {
    localStorageController.tab.set(value);
  });

  const setTab = (value) => {
    tab.value = value;
  };

  return {
    tab,
    setTab,
  };
});
