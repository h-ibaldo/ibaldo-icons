import { SvelteComponent } from 'svelte';

export interface CalendarPercentHeaderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarPercentHeader extends SvelteComponent<CalendarPercentHeaderProps> {}
