import { SvelteComponent } from 'svelte';

export interface CalendarArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarArrowUp extends SvelteComponent<CalendarArrowUpProps> {}
