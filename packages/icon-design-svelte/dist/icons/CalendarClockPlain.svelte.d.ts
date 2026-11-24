import { SvelteComponent } from 'svelte';

export interface CalendarClockPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarClockPlain extends SvelteComponent<CalendarClockPlainProps> {}
