import { SvelteComponent } from 'svelte';

export interface CalendarGridColumnsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarGridColumns extends SvelteComponent<CalendarGridColumnsProps> {}
