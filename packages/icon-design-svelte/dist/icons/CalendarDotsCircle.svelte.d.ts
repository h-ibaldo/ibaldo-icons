import { SvelteComponent } from 'svelte';

export interface CalendarDotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarDotsCircle extends SvelteComponent<CalendarDotsCircleProps> {}
