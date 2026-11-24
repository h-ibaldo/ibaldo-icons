import { SvelteComponent } from 'svelte';

export interface CalendarGridBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarGridBox extends SvelteComponent<CalendarGridBoxProps> {}
