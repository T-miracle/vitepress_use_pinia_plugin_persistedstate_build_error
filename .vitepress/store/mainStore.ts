import { defineStore } from 'pinia';

export const mainStore = defineStore('mainStore', {
    state: () => {
        return {
            message: 'Hello, World!'
        };
    },
    getters: {},
    actions: {},
    persist: true
});
