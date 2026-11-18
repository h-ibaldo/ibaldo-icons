import { SvelteComponent } from 'svelte';

export interface CalendarXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarXCircle extends SvelteComponent<CalendarXCircleProps> {}
