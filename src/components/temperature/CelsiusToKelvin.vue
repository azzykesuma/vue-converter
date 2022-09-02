<template>
    <h3>Celsus to Kelvin Converter</h3>
    <div class="calculator_container">
        <label for="celsius">Celsius</label>
        <input class="input__form" type="number" v-model="c" />
        <button class="convert_btn" @click="ConvertToKelvin(c)">convert</button>
    </div>
    <p class="result">{{ kelvin }} K</p>
</template>

<script setup>
import { ref } from 'vue';

    const c = ref(0)
    const kelvin = ref(273)
    
    const ConvertToKelvin = c => {
        kelvin.value += c
    } 
</script>