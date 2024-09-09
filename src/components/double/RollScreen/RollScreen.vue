<script setup lang="ts">
import TitleScreen from './TitleScreen.vue';
import RollRoullete from './RollRoullete.vue';
</script>

<template>
    <q-card class="roll-screen column justify-between" square>
        <TitleScreen />
        <RollRoullete />
        <div class="screen-footer row items-center justify-end">
            <p class="text-positive text-weight-bold q-ma-none">Online</p>
        </div>
    </q-card>
</template>

<style scoped>
.roll-screen {
    height: 328px;
}

.screen-footer {
    height: 80px;
    padding: 8px 16px;
}

@media screen and (max-width: 600px) {
    .roll-screen {
        height: 192px;
    }
}
</style>
