import type { DefineComponent } from 'vue';

export interface CalendarMinusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarMinusCircle: DefineComponent<CalendarMinusCircleProps>;

export default CalendarMinusCircle;
export { CalendarMinusCircle };
