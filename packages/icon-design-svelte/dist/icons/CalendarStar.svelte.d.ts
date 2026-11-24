import { SvelteComponent } from 'svelte';

export interface CalendarStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarStar extends SvelteComponent<CalendarStarProps> {}
