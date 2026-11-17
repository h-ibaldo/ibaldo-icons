import { SvelteComponent } from 'svelte';

export interface CalendarEditTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarEditText extends SvelteComponent<CalendarEditTextProps> {}
