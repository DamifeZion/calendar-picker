<script setup lang="ts">
import moment from "moment";
import { reactive, computed } from "vue";

const state = reactive({
   picker: false,
   startDate: "",
   endDate: "",
});

const formattedDateRange = computed(() => {
   if (!state.startDate || !state.endDate) {
      return "Select date range";
   }

   const dateFormat = "DD/MM/YYY";
   const newStartDate = moment(state.startDate).format(dateFormat);
   const newEndDate = moment(state.endDate).format(dateFormat);

   return `${newStartDate} - ${newEndDate}`;
});
</script>

<template>
   <div>
      <Button @click="state.picker = !state.picker">
         {{ formattedDateRange }}
      </Button>
   </div>
</template>
