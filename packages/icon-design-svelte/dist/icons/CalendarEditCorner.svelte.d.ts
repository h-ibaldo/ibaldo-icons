import { SvelteComponent } from 'svelte';

export interface CalendarEditCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarEditCorner extends SvelteComponent<CalendarEditCornerProps> {}
