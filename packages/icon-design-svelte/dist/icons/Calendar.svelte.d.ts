import { SvelteComponent } from 'svelte';

export interface CalendarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Calendar extends SvelteComponent<CalendarProps> {}
