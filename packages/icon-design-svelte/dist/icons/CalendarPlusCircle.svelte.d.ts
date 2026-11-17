import { SvelteComponent } from 'svelte';

export interface CalendarPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarPlusCircle extends SvelteComponent<CalendarPlusCircleProps> {}
