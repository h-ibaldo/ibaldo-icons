import { SvelteComponent } from 'svelte';

export interface CalendarArrowRightOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarArrowRightOut extends SvelteComponent<CalendarArrowRightOutProps> {}
