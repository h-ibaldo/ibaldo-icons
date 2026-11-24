import { SvelteComponent } from 'svelte';

export interface CalendarBarsDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarBarsDots extends SvelteComponent<CalendarBarsDotsProps> {}
