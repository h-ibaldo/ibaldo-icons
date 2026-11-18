import { SvelteComponent } from 'svelte';

export interface CalendarArrowLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarArrowLeftRight extends SvelteComponent<CalendarArrowLeftRightProps> {}
