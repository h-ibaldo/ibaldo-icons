import { SvelteComponent } from 'svelte';

export interface CalendarClockCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarClockCenter extends SvelteComponent<CalendarClockCenterProps> {}
