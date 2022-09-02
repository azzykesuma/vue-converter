<template>
    <div class="home">
        <h1 style="margin-bottom : 2em">Distance Converter</h1>
        <KMToMilesVue />
        <MilesToKMVue />
    </div>
</template>

<script setup>
    import KMToMilesVue from '@/components/distance/KMToMiles.vue';
    import MilesToKMVue from '@/components/distance/MilesToKM.vue';
</script>

<style scoped>

</style>