import { SvelteComponent } from 'svelte';

export interface CalendarOneFlipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarOneFlip extends SvelteComponent<CalendarOneFlipProps> {}
