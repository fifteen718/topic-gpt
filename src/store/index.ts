import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    /**OPENAI_API_KEY */
    apiKey: '',
  }),

  getters: {
    /**是否已登录 */
    isLogin: state => Boolean(state.apiKey.trim()),
  },
});
