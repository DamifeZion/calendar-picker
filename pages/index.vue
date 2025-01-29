<script setup lang="ts">
import ComplexDatePicker from "@/components/date-picker/ComplexDatePicker.vue";
import SimpleDatePicker from "@/components/date-picker/SimpleDatePicker.vue";
</script>

<template>
   <section class="grid items-center py-16 gap-x-6 gap-y-4 md:grid-cols-2">
      <div class="space-y-2">
         <label class="text-lg font-medium">Simple Date Range</label>
         <SimpleDatePicker />
      </div>

      <div class="space-y-2">
         <label class="text-lg font-medium"> Advanced Date Range</label>
         <ComplexDatePicker class="max-w-none" />
      </div>
   </section>
</template>
