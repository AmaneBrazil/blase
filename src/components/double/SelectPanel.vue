<script setup lang="ts">
import { ref } from 'vue';
import { outlinedAllInclusive } from '@quasar/extras/material-icons-outlined';

type Mode = 'normal' | 'auto';
type Color = 'red' | 'white' | 'grey';

const selectedMode = ref<Mode>('normal');
const selectedValue = ref<number | null>(null);
const selectedColor = ref<Color>('red');
const autoBets = ref<number | null>(null);

// const moneyFormat = {
//     decimal: ',',
//     thousands: '.',
//     prefix: '',
//     suffix: '',
//     precision: 2,
//     masked: false,
// };
</script>

<template>
    <div class="q-px-sm">
        <div class="btn-select row q-pa-xs">
            <q-btn
                no-caps
                :flat="selectedMode !== 'normal'"
                :color="selectedMode === 'normal' ? 'dark' : ''"
                class="q-px-xl q-py-sm col"
                size="sm"
                @click="selectedMode = 'normal'"
            >
                Normal
            </q-btn>

            <q-btn
                no-caps
                :flat="selectedMode !== 'auto'"
                :color="selectedMode === 'auto' ? 'dark' : ''"
                class="q-px-xl q-py-sm col"
                size="sm"
                @click="selectedMode = 'auto'"
            >
                Auto
            </q-btn>
        </div>

        <div class="q-mt-lg row">
            <q-input
                borderless
                v-model.lazy="selectedValue"
                label="Quantia"
                class="bg-dark q-px-md text-caption col-8"
                color="grey-5"
                mask="#############"
            >
                <template v-slot:append>
                    <span class="text-body2">R$</span>
                </template>
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
                <q-btn
                    class="col q-ma-xs q-py-sm"
                    :class="
                        selectedColor === 'red' ? 'selected-color-border' : ''
                    "
                    color="primary"
                    no-caps
                    @click="selectedColor = 'red'"
                >
                    x2
                </q-btn>
                <q-btn
                    class="col q-ma-xs q-py-sm"
                    :class="
                        selectedColor === 'white'
                            ? 'selected-color-border red'
                            : ''
                    "
                    color="white"
                    text-color="primary"
                    no-caps
                    @click="selectedColor = 'white'"
                >
                    x14
                </q-btn>
                <q-btn
                    class="col q-ma-xs q-py-sm"
                    :class="
                        selectedColor === 'grey' ? 'selected-color-border' : ''
                    "
                    color="grey"
                    no-caps
                    @click="selectedColor = 'grey'"
                >
                    x2
                </q-btn>
            </div>

            <div class="q-mt-lg">
                <q-input
                    borderless
                    v-model.number="autoBets"
                    mask="###########"
                    label="Total de Apostas"
                    color="grey-5"
                    dense
                    min="0"
                    class="bg-dark q-px-md text-caption"
                    rounded
                >
                    <template v-slot:append>
                        <span v-if="!autoBets" class="text-body2">
                            <q-icon :name="outlinedAllInclusive" size="sm" />
                        </span>
                    </template>
                </q-input>
            </div>

            <q-btn
                color="primary"
                class="full-width q-mt-lg q-py-md font-weight-bold"
                no-caps
                size="0.9em"
            >
                Começar o Jogo
            </q-btn>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.selected-color-border {
    border: 2px solid white;
    border-radius: 4px;
    &.red {
        border-color: $primary;
    }
}

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
