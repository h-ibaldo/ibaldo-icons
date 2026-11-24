import { SvelteComponent } from 'svelte';

export interface CalendarBanSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarBanSmall extends SvelteComponent<CalendarBanSmallProps> {}
