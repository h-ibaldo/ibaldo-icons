import { SvelteComponent } from 'svelte';

export interface CalendarTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarTriangle extends SvelteComponent<CalendarTriangleProps> {}
