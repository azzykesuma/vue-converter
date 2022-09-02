<template>
    <h3>Celsus to Fahrenheit Converter</h3>
    <div class="calculator_container">
        <label for="celsius">Celsius</label>
        <input class="input__form" type="number" v-model="c" />
        <button class="convert_btn" @click="ConvertToFahrenheit(c)">convert</button>
    </div>
    <p class="result">{{ fahrenheit }} F</p>
</template>

<script setup>
import { ref } from 'vue';

    const c = ref(0)
    const fahrenheit = ref(32)

    const ConvertToFahrenheit = (c) => {
        fahrenheit.value =  (c * 1.8) + 32
    } 
</script>
