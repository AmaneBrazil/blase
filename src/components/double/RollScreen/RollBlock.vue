<script setup lang="ts">
import { RollOption } from 'src/components/models';
import { symOutlinedModeHeat } from '@quasar/extras/material-symbols-outlined';

const props = defineProps<{ option: RollOption; mini?: boolean }>();
</script>

<template>
    <q-card
        class="roll-block row items-center justify-center"
        :class="`bg-${props.option.color} ${
            props.mini ? 'mini' : 'full-height'
        }`"
    >
        <div
            class="text-circle row items-center justify-center"
            :class="props.mini ? 'mini' : ''"
        >
            <q-icon
                v-if="props.option.icon"
                color="primary"
                :size="props.mini ? 'sm' : 'xxl'"
                :name="symOutlinedModeHeat"
            />
            <span v-else :class="!props.mini ? 'text-h6' : ''" class="block">
                {{ props.option.value }}
            </span>
        </div>
    </q-card>
</template>

<style scoped lang="scss">
.roll-block {
    width: 15%;
    border-left: 4px solid $dark;
    border-right: 4px solid $dark;

    &.mini {
        width: 30px;
        height: 30px;
        border: none;
    }

    .text-circle {
        height: 60%;
        width: 60%;
        &.mini {
            height: 25px;
            width: 25px;
            border-width: 2px !important;
            span {
                font-size: 9px;
            }
        }
        border: 4px solid white !important;
        border-radius: 50% !important;
        span {
            letter-spacing: -2px;
        }
    }
}
</style>
