import { SvelteComponent } from 'svelte';

export interface CalendarPlusPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarPlusPlain extends SvelteComponent<CalendarPlusPlainProps> {}
