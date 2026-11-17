import { SvelteComponent } from 'svelte';

export interface CalendarArrowRightInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarArrowRightIn extends SvelteComponent<CalendarArrowRightInProps> {}
