import { SvelteComponent } from 'svelte';

export interface CalendarXCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarXCorner extends SvelteComponent<CalendarXCornerProps> {}
