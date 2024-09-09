<script setup lang="ts">
import RollBlock from '../RollScreen/RollBlock.vue';
import rolls from '../../../composables/rolls';
</script>

<template>
    <div class="fit row">
        <RollBlock
            v-for="(roll, index) of rolls.lastRolls.value"
            :key="index"
            :option="roll"
            :mini="true"
            class="q-mx-xs"
        />
    </div>
</template>
