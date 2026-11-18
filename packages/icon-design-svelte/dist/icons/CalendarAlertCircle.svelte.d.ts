import { SvelteComponent } from 'svelte';

export interface CalendarAlertCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarAlertCircle extends SvelteComponent<CalendarAlertCircleProps> {}
