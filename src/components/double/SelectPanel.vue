<script setup lang="ts">
import { ref } from 'vue';

type Mode = 'normal' | 'auto';

const selectedMode = ref<Mode>('normal');

const selectedValue = ref<number | null>(null);
</script>

<template>
    <div class="q-px-sm">
        <div class="btn-select q-pa-xs">
            <q-btn
                no-caps
                :flat="selectedMode !== 'normal'"
                :color="selectedMode === 'normal' ? 'dark' : ''"
                class="q-px-xl q-py-sm"
                size="sm"
                @click="selectedMode = 'normal'"
            >
                Normal
            </q-btn>

            <q-btn
                no-caps
                :flat="selectedMode !== 'auto'"
                :color="selectedMode === 'auto' ? 'dark' : ''"
                class="q-px-xl q-py-sm"
                size="sm"
                @click="selectedMode = 'auto'"
            >
                Auto
            </q-btn>
        </div>

        <div class="q-mt-lg row">
            <q-input
                borderless
                v-model="selectedValue"
                label="Quantia"
                color="grey-5"
                dense
                class="bg-dark q-px-md text-caption col-8"
                rounded
            >
                <template v-slot:append
                    ><span class="text-body2">R$</span></template
                >
            </q-input>
            <q-btn
                outline
                class="col-2 text-caption btn-select"
                @click="selectedValue != null ? (selectedValue /= 2) : null"
            >
                1/2
            </q-btn>
            <q-btn
                outline
                class="col-2 text-caption btn-select"
                @click="selectedValue != null ? (selectedValue *= 2) : null"
            >
                2x
            </q-btn>
        </div>

        <div class="q-mt-lg">
            <span class="light-grey">Selecionar Cor</span>
            <div class="row gutter-x-sm">
                <q-btn class="col q-ma-xs q-py-sm" color="primary" no-caps>
                    x2
                </q-btn>
                <q-btn
                    class="col q-ma-xs q-py-sm"
                    color="white"
                    text-color="primary"
                    no-caps
                >
                    x14
                </q-btn>
                <q-btn class="col q-ma-xs q-py-sm" color="grey" no-caps>
                    x2
                </q-btn>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.btn-select {
    border: 1px solid $grey;
    color: $light-grey !important;
    border-radius: 4px;
}

.grey {
    color: $grey;
}

.light-grey {
    color: $light-grey;
}
</style>
