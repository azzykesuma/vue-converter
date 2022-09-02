<template>
    <h3>KM to Miles Converter</h3>
    <div class="calculator_container">
        <label>KM</label>
        <input class="input__form" type="number" v-model="dist" />
        <button class="convert_btn" @click="ConvertToMiles(dist)">convert</button>
    </div>
    <p class="result">{{ Miles }} Miles</p>
</template>

<script setup>
import { ref } from 'vue';

    const dist = ref(1)
    const Miles = ref(0.62137)

    const ConvertToMiles = (dist) => {
        Miles.value = dist * 0.62137
    }
</script>
