import { SvelteComponent } from 'svelte';

export interface CalendarSeventeenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSeventeen extends SvelteComponent<CalendarSeventeenProps> {}
