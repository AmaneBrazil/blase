<script setup lang="ts">
import rolls from '../../../composables/rolls';
</script>

<template>
    <section class="q-pt-md q-px-md">
        <p v-if="rolls.rollResult.value" class="text-center text-h6">
            Blase girou {{ rolls.rollResult.value }}!
        </p>

        <p v-else-if="!rolls.remainTimeToStr.value" class="text-center text-h6">
            Girando...
        </p>

        <div v-else class="q-pa-sm bg-secondary rounded-borders">
            <q-linear-progress
                size="30px"
                :value="rolls.progress.value"
                :buffer="1"
                color="primary"
                class="rounded-borders"
            >
                <div class="absolute-full flex flex-center justify-evenly">
                    <!-- <q-badge
                            color="primary"
                            text-color="white"
                            :label="'Girando Em ' + remainTimeToStr"
                            class="text-weight-bold"
                        /> -->
                    <p
                        class="text-weight-bold text-white text-caption q-mb-none"
                    >
                        Girando Em {{ rolls.remainTimeToStr.value }}
                    </p>
                </div>
            </q-linear-progress>
        </div>
    </section>
</template>
