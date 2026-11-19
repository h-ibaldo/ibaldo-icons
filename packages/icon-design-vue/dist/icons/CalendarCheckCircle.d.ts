import type { DefineComponent } from 'vue';

export interface CalendarCheckCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarCheckCircle: DefineComponent<CalendarCheckCircleProps>;

export default CalendarCheckCircle;
export { CalendarCheckCircle };
