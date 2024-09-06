<template>
    <q-page class="row items-center justify-evenly">
        <DoubleGame />
    </q-page>
</template>

<script setup lang="ts">
import DoubleGame from 'src/components/double/DoubleGame.vue';

defineOptions({
    name: 'IndexPage',
});
</script>
