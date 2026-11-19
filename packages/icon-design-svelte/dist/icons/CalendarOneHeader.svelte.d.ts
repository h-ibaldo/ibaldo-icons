import { SvelteComponent } from 'svelte';

export interface CalendarOneHeaderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarOneHeader extends SvelteComponent<CalendarOneHeaderProps> {}
