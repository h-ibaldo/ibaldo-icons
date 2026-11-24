import type { DefineComponent } from 'vue';

export interface CalendarXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarXCircle: DefineComponent<CalendarXCircleProps>;

export default CalendarXCircle;
export { CalendarXCircle };
