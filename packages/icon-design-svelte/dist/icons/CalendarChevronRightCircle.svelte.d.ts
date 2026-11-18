import { SvelteComponent } from 'svelte';

export interface CalendarChevronRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarChevronRightCircle extends SvelteComponent<CalendarChevronRightCircleProps> {}
