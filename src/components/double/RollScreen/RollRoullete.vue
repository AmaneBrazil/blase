<script setup lang="ts">
import rolls from '../../../composables/rolls';
import RollBlock from './RollBlock.vue';
</script>

<template>
    <div class="roll-roullete row flex-center overflow-hidden">
        <RollBlock
            v-for="option of rolls.actualOptions.value"
            :key="option.value"
            :option="option"
        />
    </div>
</template>

<style scoped>
.roll-roullete {
    height: 30%;
}
</style>
