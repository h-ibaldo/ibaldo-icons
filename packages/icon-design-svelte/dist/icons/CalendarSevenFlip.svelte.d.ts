import { SvelteComponent } from 'svelte';

export interface CalendarSevenFlipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSevenFlip extends SvelteComponent<CalendarSevenFlipProps> {}
