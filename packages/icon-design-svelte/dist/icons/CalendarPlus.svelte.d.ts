import { SvelteComponent } from 'svelte';

export interface CalendarPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarPlus extends SvelteComponent<CalendarPlusProps> {}
