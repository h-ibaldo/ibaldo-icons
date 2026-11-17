import { SvelteComponent } from 'svelte';

export interface CalendarCandleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarCandle extends SvelteComponent<CalendarCandleProps> {}
