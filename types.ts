import type { Moment as MomentType } from "moment";

export type CalendarPickerGroupProps = {
   range: {
      start: string;
      end: string;
   };
   date: string;
   open: boolean;
   onSelect: (date: string) => void;
   onSetRange: (range: string) => void
};

export type PickerCalendarProps = Omit<CalendarPickerGroupProps, "open" | "selectingStart" | "onSetRange"> & {
   position: "left" | "right";
   onPrev?: () => void;
   onNext?: () => void;
   onSelect: (date: string) => void;
};

export type Moment = MomentType