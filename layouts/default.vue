<script setup lang="ts">
import { ref } from "vue";

const date = ref(new Date());
</script>

<template>
   <div class="grid grid-rows-[auto_1fr_auto] min-h-screen pb-10">
      <header class="sticky top-0 z-30 px-4 pt-4">
         <nav
            class="container bg-gradient-to-br gap-4 from-primary to-[hsl(230,85%,62%)]/70 h-16 flex items-center justify-between shadow-[0px_0px_15px_rgba(0,0,0,0.1)] rounded-full backdrop-blur-lg text-primary-foreground"
         >
            <h4 class="text-xl font-bold sm:text-3xl font-logo">Damife Zion</h4>

            <ul class="sm:text-xl tracking-wide *:font-semibold">
               <li>Date Picker</li>
            </ul>
         </nav>
      </header>

      <main class="container flex-grow flex flex-col px-[2rem]">
         <slot />
      </main>
   </div>
</template>
