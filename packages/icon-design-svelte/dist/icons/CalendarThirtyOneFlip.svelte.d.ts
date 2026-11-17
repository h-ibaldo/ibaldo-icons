import { SvelteComponent } from 'svelte';

export interface CalendarThirtyOneFlipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarThirtyOneFlip extends SvelteComponent<CalendarThirtyOneFlipProps> {}
