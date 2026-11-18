import { SvelteComponent } from 'svelte';

export interface CalendarMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarMinusCircle extends SvelteComponent<CalendarMinusCircleProps> {}
