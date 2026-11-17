import { SvelteComponent } from 'svelte';

export interface CalendarEditPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarEditPlain extends SvelteComponent<CalendarEditPlainProps> {}
