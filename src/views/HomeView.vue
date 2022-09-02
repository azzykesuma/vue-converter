<template>
  <div class="home">
    <h1 style="margin-bottom : 2em">Temperature Converter</h1>
    <CelsiusToFahrenheitVue />
    <FahrenheitToCelsiusVue />
    <CelsiusToKelvinVue />
  </div>
</template>

<script setup>
  import CelsiusToKelvinVue from '@/components/temperature/CelsiusToKelvin.vue';
  import FahrenheitToCelsiusVue from '@/components/temperature/FahrenheitToCelsius.vue';
  import CelsiusToFahrenheitVue from '@/components/temperature/CelsiusToFahrenheit.vue';
</script>
