import { SvelteComponent } from 'svelte';

export interface CalendarMusicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarMusic extends SvelteComponent<CalendarMusicProps> {}
