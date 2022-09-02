<template>
    <h3>Miles to KM Converter</h3>
    <div class="calculator_container">
        <label>KM</label>
        <input class="input__form" type="number" v-model="dist" />
        <button class="convert_btn" @click="ConvertToKM(dist)">convert</button>
    </div>
    <p class="result">{{ KM }} KM</p>
</template>

<script setup>
import { ref } from 'vue';

    const KM = ref(1.60934)
    const dist = 1

    const ConvertToKM = dist => {
        KM.value = dist * 1.60934
    }
</script>

<style>

</style>