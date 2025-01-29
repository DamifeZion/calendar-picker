<script setup lang="ts">
import { ref } from "vue";
import Calendar from "./Calendar.vue";
import moment from "moment";
import type { CalendarPickerGroupProps } from "@/types";
import { dateRangeConst } from "@/constants/date-range-const";

const props = defineProps<CalendarPickerGroupProps>();
const emit = defineEmits(["select", "setRange"]);

const calendarDate = ref(moment(props.date));
const adjustedEndDate = ref(calendarDate.value.clone().add(1, "month"));

const handlePrevClick = () => {
   calendarDate.value = calendarDate.value.clone().subtract(1, "month");
   adjustedEndDate.value = calendarDate.value.clone().add(1, "month");
};

const handleNextClick = () => {
   calendarDate.value = calendarDate.value.clone().add(1, "month");
   adjustedEndDate.value = calendarDate.value.clone().add(1, "month");
};

</script>

<template>
   <Transition
      enter-active-class="transition-all duration-500 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="max-h-[600px] opacity-100"
      leave-from-class="max-h-[600px] opacity-100"
      leave-to-class="opacity-0 max-h-0"
   >
      <section
         v-if="props.open"
         class="mt-4 overflow-hidden rounded-lg border shadow-[0_0_32px_rgba(0,0,0,0.04)] w-fit"
      >
         <div class="flex">
            <Calendar
               position="left"
               :date="calendarDate.format('YYYY-MM-DD')"
               :range="props.range"
               @prev="handlePrevClick"
               @select="$emit('select', $event)"
            />
            <Calendar
               position="right"
               :date="adjustedEndDate.format('YYYY-MM-DD')"
               :range="props.range"
               @next="handleNextClick"
               @select="$emit('select', $event)"
            />
         </div>

         <div class="flex flex-wrap items-center gap-4 px-6 py-4">
            <Button
               variant="outline"
               :key="range"
               v-for="range in dateRangeConst.ranges"
               @click="$emit('setRange', range)"
            >
               {{ range }}
            </Button>
         </div>
      </section>
   </Transition>
</template>
