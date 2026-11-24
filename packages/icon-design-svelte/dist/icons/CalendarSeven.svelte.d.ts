import { SvelteComponent } from 'svelte';

export interface CalendarSevenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSeven extends SvelteComponent<CalendarSevenProps> {}
