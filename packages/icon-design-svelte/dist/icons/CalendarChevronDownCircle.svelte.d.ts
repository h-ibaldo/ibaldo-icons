import { SvelteComponent } from 'svelte';

export interface CalendarChevronDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarChevronDownCircle extends SvelteComponent<CalendarChevronDownCircleProps> {}
