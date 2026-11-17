import { SvelteComponent } from 'svelte';

export interface CalendarFoldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarFold extends SvelteComponent<CalendarFoldProps> {}
