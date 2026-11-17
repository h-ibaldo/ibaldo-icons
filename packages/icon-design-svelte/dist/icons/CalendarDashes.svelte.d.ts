import { SvelteComponent } from 'svelte';

export interface CalendarDashesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarDashes extends SvelteComponent<CalendarDashesProps> {}
