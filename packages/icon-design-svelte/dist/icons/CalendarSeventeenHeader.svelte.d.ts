import { SvelteComponent } from 'svelte';

export interface CalendarSeventeenHeaderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSeventeenHeader extends SvelteComponent<CalendarSeventeenHeaderProps> {}
