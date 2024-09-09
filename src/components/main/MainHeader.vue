<script setup lang="ts">
import { symOutlinedModeHeat } from '@quasar/extras/material-symbols-outlined';
</script>

<template>
    <q-header bordered class="bg-blue-grey-10">
        <q-toolbar class="bg-dark">
            <q-btn flat dense round icon="menu" aria-label="Menu" />
            <q-toolbar-title class="text-bold text-h5">
                <q-icon color="primary" size="lg" :name="symOutlinedModeHeat" />
                blase
            </q-toolbar-title>
            <div>
                <q-btn flat no-caps aria-label="Entrar">Entrar</q-btn>
                <q-btn no-caps color="primary" aria-label="Cadastrar">
                    Cadastre-se
                </q-btn>
            </div>
        </q-toolbar>
    </q-header>
</template>
