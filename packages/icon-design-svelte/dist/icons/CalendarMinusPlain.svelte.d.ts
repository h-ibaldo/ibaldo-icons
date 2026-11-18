import { SvelteComponent } from 'svelte';

export interface CalendarMinusPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarMinusPlain extends SvelteComponent<CalendarMinusPlainProps> {}
