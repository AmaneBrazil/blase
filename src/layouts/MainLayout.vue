<script setup lang="ts">
import MainHeader from 'src/components/main/MainHeader.vue';

defineOptions({
    name: 'MainLayout',
});
</script>

<template>
    <q-layout view="lHh Lpr lFf">
        <MainHeader />
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
