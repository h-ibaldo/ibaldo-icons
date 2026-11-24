import { SvelteComponent } from 'svelte';

export interface CalendarEdit2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarEdit2 extends SvelteComponent<CalendarEdit2Props> {}
