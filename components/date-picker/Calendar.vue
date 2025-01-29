<script setup lang="ts">
import { ref, computed, watch } from "vue";
import moment from "moment";
import type { Moment, PickerCalendarProps } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps<PickerCalendarProps>();
const emit = defineEmits(["select"]);

const currentDate = ref(moment(props.date));
const month = computed(() => currentDate.value.format("MMMM"));
const year = computed(() => currentDate.value.format("YYYY"));

const daysInMonth = computed(() => {
   const days = [];
   const startOfMonth = currentDate.value.clone().startOf("month");
   const endOfMonth = currentDate.value.clone().endOf("month");
   for (
      let day = startOfMonth.clone();
      day.isBefore(endOfMonth) || day.isSame(endOfMonth);
      day.add(1, "day")
   ) {
      days.push(day.clone());
   }
   return days;
});

watch(
   () => props.date,
   (newDate) => {
      currentDate.value = moment(newDate);
   }
);

const isWithinRange = (day: Moment) => {
   return (
      props.range.start &&
      props.range.end &&
      moment(day).isBetween(props.range.start, props.range.end, "day", "[]")
   );
};


const handleVariant = (day: Moment) => {
   if (!props.range.start) {
      return day.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
         ? "default"
         : "ghost";
   }
   return day.format("YYYY-MM-DD") === props.range.start ||
      day.format("YYYY-MM-DD") === props.range.end
      ? "default"
      : "ghost";
};
</script>

<template>
   <section class="px-6 pt-6 pb-4 min-w-[340px]">
      <div class="flex items-center justify-between">
         <Button
            size="icon"
            variant="ghost"
            @click="props.onPrev"
            :class="
               cn('', {
                  'opacity-0 invisible': position !== 'left',
               })
            "
         >
            <ChevronLeft />
         </Button>

         <h4 class="flex items-start gap-2">
            <span class="font-medium"> {{ month }} </span>
            <span>-</span>
            <span class="text-muted-foreground">{{ year }}</span>
         </h4>

         <Button
            size="icon"
            variant="ghost"
            @click="props.onNext"
            :class="
               cn('', {
                  'opacity-0 invisible': position !== 'right',
               })
            "
         >
            <ChevronRight />
         </Button>
      </div>

      <!-- Date range -->
      <div class="grid grid-cols-7 gap-0 mt-4 text-center">
         <!-- Weekdays -->
         <span
            v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
            :key="day"
            class="font-medium text-muted-foreground"
         >
            {{ day }}
         </span>

         <!-- Calendar Days -->
         <div class="mt-4 col-span-full grid grid-cols-[inherit]">
            <div
               v-for="day in daysInMonth"
               :key="day.format('YYYY-MM-DD')"
               @click="$emit('select', day.format('YYYY-MM-DD'))"
               :class="
                  cn('flex items-center justify-center w-[45px] h-[45px]', {
                     'bg-muted': isWithinRange(day),
                     'rounded-tl-md rounded-bl-md':
                        day.format('YYYY-MM-DD') === props.range.start,
                     'rounded-tr-md rounded-br-md':
                        day.format('YYYY-MM-DD') === props.range.end,
                  })
               "
            >
               <Button
                  :variant="handleVariant(day)"
                  class="rounded-sm size-full"
               >
                  {{ day.date() }}
               </Button>
            </div>
         </div>
      </div>
   </section>
</template>
