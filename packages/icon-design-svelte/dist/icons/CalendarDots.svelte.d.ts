import { SvelteComponent } from 'svelte';

export interface CalendarDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarDots extends SvelteComponent<CalendarDotsProps> {}
