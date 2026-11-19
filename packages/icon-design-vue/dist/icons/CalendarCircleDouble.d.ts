import type { DefineComponent } from 'vue';

export interface CalendarCircleDoubleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCircleDouble: DefineComponent<CalendarCircleDoubleProps>;

export default CalendarCircleDouble;
export { CalendarCircleDouble };
