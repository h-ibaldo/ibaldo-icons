import { SvelteComponent } from 'svelte';

export interface CalendarArrowRightDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarArrowRightDown extends SvelteComponent<CalendarArrowRightDownProps> {}
