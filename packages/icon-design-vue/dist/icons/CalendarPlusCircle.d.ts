import type { DefineComponent } from 'vue';

export interface CalendarPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarPlusCircle: DefineComponent<CalendarPlusCircleProps>;

export default CalendarPlusCircle;
export { CalendarPlusCircle };
