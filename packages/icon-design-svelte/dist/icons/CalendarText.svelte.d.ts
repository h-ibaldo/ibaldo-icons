import { SvelteComponent } from 'svelte';

export interface CalendarTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarText extends SvelteComponent<CalendarTextProps> {}
