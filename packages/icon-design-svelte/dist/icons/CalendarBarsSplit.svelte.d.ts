import { SvelteComponent } from 'svelte';

export interface CalendarBarsSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarBarsSplit extends SvelteComponent<CalendarBarsSplitProps> {}
