import { SvelteComponent } from 'svelte';

export interface CalendarChevronUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarChevronUpDown extends SvelteComponent<CalendarChevronUpDownProps> {}
