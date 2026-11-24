import { SvelteComponent } from 'svelte';

export interface CalendarCellsRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarCellsRight extends SvelteComponent<CalendarCellsRightProps> {}
