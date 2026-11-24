import { SvelteComponent } from 'svelte';

export interface CalendarCheckPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarCheckPlain extends SvelteComponent<CalendarCheckPlainProps> {}
