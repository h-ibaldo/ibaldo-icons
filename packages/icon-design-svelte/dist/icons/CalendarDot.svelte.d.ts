import { SvelteComponent } from 'svelte';

export interface CalendarDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarDot extends SvelteComponent<CalendarDotProps> {}
