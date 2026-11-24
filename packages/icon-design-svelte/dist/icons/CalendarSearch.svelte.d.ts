import { SvelteComponent } from 'svelte';

export interface CalendarSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSearch extends SvelteComponent<CalendarSearchProps> {}
