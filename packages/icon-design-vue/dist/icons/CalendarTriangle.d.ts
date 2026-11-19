import type { DefineComponent } from 'vue';

export interface CalendarTriangleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CalendarTriangle: DefineComponent<CalendarTriangleProps>;

export default CalendarTriangle;
export { CalendarTriangle };
