<script setup lang="ts">
import { useDatePicker } from "@/composables/use-date-picker";
import CalendarPickerGroup from "./CalendarPickerGroup.vue";
import { Calendar } from "lucide-vue-next";

const { state, formattedDateRange, selectDate, setRange } = useDatePicker();
</script>

<template>
   <div class="relative">
      <Button
         variant="outline"
         @click="state.open = !state.open"
         :class="
            cn(
               'justify-start min-w-[260px] h-fit py-3 rounded-md font-medium bg-background font-medium',
               {
                  'text-muted-foreground':
                     formattedDateRange.toLocaleLowerCase() === 'select date',
               }
            )
         "
      >
         <Calendar class="size-4" /> {{ formattedDateRange }}
      </Button>

      <!-- Calendar Picker -->
      <CalendarPickerGroup
         :range="state.range"
         :date="state.date"
         :open="state.open"
         @select="selectDate"
         @set-range="setRange"
         class="absolute"
      />
   </div>
</template>
