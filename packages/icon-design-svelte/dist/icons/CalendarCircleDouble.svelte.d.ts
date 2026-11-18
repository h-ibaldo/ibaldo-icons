import { SvelteComponent } from 'svelte';

export interface CalendarCircleDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarCircleDouble extends SvelteComponent<CalendarCircleDoubleProps> {}
