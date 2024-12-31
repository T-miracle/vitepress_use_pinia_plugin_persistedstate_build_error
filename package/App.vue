<template>
    <div class="container">
        <h1>Vue.js</h1>
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">

import { mainStore } from '../.vitepress/store/mainStore'

const { message } = mainStore()

</script>