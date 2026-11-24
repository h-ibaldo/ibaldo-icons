import { SvelteComponent } from 'svelte';

export interface CalendarSevenHeaderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSevenHeader extends SvelteComponent<CalendarSevenHeaderProps> {}
