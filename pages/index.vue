<script setup lang="ts">
import DatePicker from "@/components/DatePicker.vue";
</script>

<template>
   <section class="grid items-center py-16 gap-x-6 gap-y-4 md:grid-cols-2">
      <div class="space-y-2">
         <label class="text-lg font-semibold">Date Range</label>
         <DatePicker />
      </div>
   </section>
</template>
