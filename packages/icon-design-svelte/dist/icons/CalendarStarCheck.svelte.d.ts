import { SvelteComponent } from 'svelte';

export interface CalendarStarCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarStarCheck extends SvelteComponent<CalendarStarCheckProps> {}
