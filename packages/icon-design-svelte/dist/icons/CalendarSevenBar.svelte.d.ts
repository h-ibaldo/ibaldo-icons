import { SvelteComponent } from 'svelte';

export interface CalendarSevenBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSevenBar extends SvelteComponent<CalendarSevenBarProps> {}
