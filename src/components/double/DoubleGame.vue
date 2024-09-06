<script setup lang="ts">
import SelectPanel from './SelectPanel.vue';
import RollScreen from './RollScreen.vue';
import PreviousRolls from './PreviousRolls.vue';
</script>

<template>
    <q-card class="bg-secondary" flat>
        <q-card-section>
            <SelectPanel />
        </q-card-section>

        <main>
            <q-card-section>
                <RollScreen />
            </q-card-section>
            <q-card-section>
                <PreviousRolls />
            </q-card-section>
        </main>
    </q-card>
</template>
