import { SvelteComponent } from 'svelte';

export interface CalendarHeartCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarHeartCorner extends SvelteComponent<CalendarHeartCornerProps> {}
