<template>
    <h3>Celsus to Fahrenheit Converter</h3>
    <div class="calculator_container">
        <label for="celsius">Fahrenheit</label>
        <input class="input__form" type="number" v-model="c" />
        <button class="convert_btn" @click="ConvertToCelsius(c)">convert</button>
    </div>
    <p class="result">{{ celsius }} C</p>
</template>

<script setup>
import { ref } from 'vue';

    const celsius = ref(-17.7792)
    const c = ref(0)

    
    const ConvertToCelsius = (c) => {
        celsius.value =  (c - 32 ) * .5556
    }

</script>