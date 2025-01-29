<script setup lang="ts">
import { ref, computed } from "vue";
import moment from "moment";
import Datepicker from "@vuepic/vue-datepicker";
import Button from "@/components/Button.vue";

const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);
const showPicker = ref(false);

const formattedRange = computed(() => {
   if (!startDate.value || !endDate.value) return "Select Date Range";
   return `${moment(startDate.value).format("MMM DD, YYYY")} - ${moment(
      endDate.value
   ).format("MMM DD, YYYY")}`;
});

// Shortcuts for quick selection
const selectShortcut = (days: number) => {
   startDate.value = moment().subtract(days, "days").toDate();
   endDate.value = moment().toDate();
   showPicker.value = false;
};

const resetDates = () => {
   startDate.value = null;
   endDate.value = null;
   showPicker.value = false;
};
</script>

<template>
   <div class="relative w-full max-w-md">
      <!-- Button to trigger the date picker -->
      <Button
         variant="outline"
         @click="showPicker = !showPicker"
         class="w-full py-6 min-w-[300px] focus:outline-none"
      >
         {{ formattedRange }}
      </Button>

      <!-- Date Picker Dropdown -->
      <div
         v-if="showPicker"
         class="absolute left-0 z-10 w-full p-4 bg-white border rounded-md shadow-lg top-12"
      >
         <Datepicker
            v-model="startDate"
            v-model:end="endDate"
            range
            locale="en"
            position="center"
            :clearable="false"
            auto-apply
            class="w-full"
         />

         <!-- Shortcuts -->
         <div class="grid grid-cols-2 gap-2 mt-4">
            <Button variant="secondary" @click="selectShortcut(7)"
               >Last 7 Days</Button
            >
            <Button variant="secondary" @click="selectShortcut(30)"
               >Last 30 Days</Button
            >
            <Button variant="secondary" @click="selectShortcut(90)"
               >Last 3 Months</Button
            >
            <Button variant="secondary" @click="selectShortcut(365)"
               >Last Year</Button
            >
         </div>

         <!-- Actions -->
         <div class="flex justify-between mt-4">
            <Button variant="outline" @click="resetDates">Clear</Button>
            <Button @click="showPicker = false">Done</Button>
         </div>
      </div>
   </div>
</template>
