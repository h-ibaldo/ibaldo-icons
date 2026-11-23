import { SvelteComponent } from 'svelte';

export interface CalendarOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarOff extends SvelteComponent<CalendarOffProps> {}
