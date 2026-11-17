import { SvelteComponent } from 'svelte';

export interface CalendarPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarPlain extends SvelteComponent<CalendarPlainProps> {}
