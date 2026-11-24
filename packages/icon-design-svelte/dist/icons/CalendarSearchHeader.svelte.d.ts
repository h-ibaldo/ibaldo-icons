import { SvelteComponent } from 'svelte';

export interface CalendarSearchHeaderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSearchHeader extends SvelteComponent<CalendarSearchHeaderProps> {}
