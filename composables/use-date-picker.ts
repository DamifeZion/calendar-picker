import moment from "moment";
import { reactive, computed } from "vue";

export const useDatePicker = () => {
   const state = reactive({
      open: false,
      range: {
         start: "",
         end: "",
      },
      date: moment().format("DD/MMM/YYYY"),
      selectingStart: false,
   });

   const formattedDateRange = computed(() => {
      if (!state.range.start || !state.range.end) {
         return "Select date";
      }
      return `${moment(state.range.start).format("DD/MM/YYYY")} - ${moment(
         state.range.end
      ).format("DD/MM/YYYY")}`;
   });

   const selectDate = (date: string) => {
      if (state.selectingStart) {
         state.range.start = date;
         state.range.end = ""; // Reset end date when selecting new start
         state.selectingStart = false;
      } else {
         state.range.end = date;
         state.selectingStart = true;
      }
   };

   const setRange = (range: string) => {
      const startDate = moment().format("YYYY-MM-DD");
      let endDate = "";

      switch (range) {
         case "7 days":
            endDate = moment(startDate).add(7, "days").format("YYYY-MM-DD");
            break;
         case "15 days":
            endDate = moment(startDate).add(15, "days").format("YYYY-MM-DD");
            break;
         case "30 days":
         case "1 month":
            endDate = moment(startDate).add(1, "month").format("YYYY-MM-DD");
            break;
         case "3 months":
            endDate = moment(startDate).add(3, "months").format("YYYY-MM-DD");
            break;
      }
      state.range.start = startDate;
      state.range.end = endDate;
   };

   console.log(state.range);

   return {
      state,
      formattedDateRange,
      selectDate,
      setRange,
   };
};
