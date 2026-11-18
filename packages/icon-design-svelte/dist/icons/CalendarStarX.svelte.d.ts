import { SvelteComponent } from 'svelte';

export interface CalendarStarXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarStarX extends SvelteComponent<CalendarStarXProps> {}
