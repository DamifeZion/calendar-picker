<script setup lang="ts">
import { ref } from "vue";

const date = ref(new Date());
</script>

<template>
   <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header class="sticky top-0 px-4 pt-4">
         <nav
            class="container bg-gradient-to-br from-primary to-[hsl(230,85%,62%)]/70 h-16 flex items-center justify-between shadow-[0px_0px_15px_rgba(0,0,0,0.1)] rounded-full backdrop-blur-lg text-primary-foreground"
         >
            <h4 class="text-3xl font-bold font-logo">Damife Zion</h4>

            <ul class="text-xl tracking-wide *:font-semibold">
               <li>Date Picker</li>
            </ul>
         </nav>
      </header>

      <main class="flex-grow flex justify-center items-center py-10 px-[2rem]">
         <slot />
      </main>

      <footer>
         <section class="py-4 px-[2rem] flex items-center justify-center text-center bg-secondary">
            <h5 class="font-medium">
               &copy; {{ date.getFullYear() }} Made with 💓 by Damife Zion
            </h5>
         </section>
      </footer>
   </div>
</template>
