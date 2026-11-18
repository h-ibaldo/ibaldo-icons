import { SvelteComponent } from 'svelte';

export interface CalendarCellsLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarCellsLeft extends SvelteComponent<CalendarCellsLeftProps> {}
