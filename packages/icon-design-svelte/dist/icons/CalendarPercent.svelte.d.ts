import { SvelteComponent } from 'svelte';

export interface CalendarPercentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarPercent extends SvelteComponent<CalendarPercentProps> {}
