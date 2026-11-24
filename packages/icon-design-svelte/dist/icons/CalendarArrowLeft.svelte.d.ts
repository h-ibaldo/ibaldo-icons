import { SvelteComponent } from 'svelte';

export interface CalendarArrowLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarArrowLeft extends SvelteComponent<CalendarArrowLeftProps> {}
