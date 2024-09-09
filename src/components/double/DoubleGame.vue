<script setup lang="ts">
import SelectPanel from './SelectPanel.vue';
import RollScreen from './RollScreen/RollScreen.vue';
import PreviousRolls from './PreviousRolls/PreviousRolls.vue';
import rolls from '../../composables/rolls';
import { onMounted } from 'vue';

onMounted(() => {
    rolls.waitRoll();
});
</script>

<template>
    <q-card class="double-game bg-secondary row" flat>
        <q-card-section class="col col-md-4">
            <SelectPanel />
        </q-card-section>

        <main class="col col-md-8">
            <q-card-section>
                <RollScreen />
            </q-card-section>
            <q-card-section>
                <PreviousRolls />
            </q-card-section>
        </main>
    </q-card>
</template>

<style scoped>
.double-game {
    width: 90%;
    min-width: 300px;
    max-width: 1224px;
}
</style>
