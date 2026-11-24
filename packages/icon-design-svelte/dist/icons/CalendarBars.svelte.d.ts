import { SvelteComponent } from 'svelte';

export interface CalendarBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarBars extends SvelteComponent<CalendarBarsProps> {}
