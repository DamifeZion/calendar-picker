<script setup lang="ts">
// import DatePicker from "@/components/DatePicker.vue";
import NewDatePicker from "@/components/date-picker/index.vue";
</script>

<template>
   <section class="py-16">
      <!-- <div class="space-y-2">
         <label class="text-lg font-semibold">Date Range</label>
         <DatePicker />
      </div> -->

      <div class="space-y-2">
         <label class="text-lg font-semibold">New Date Range</label>
         <NewDatePicker />
      </div>
   </section>
</template>
