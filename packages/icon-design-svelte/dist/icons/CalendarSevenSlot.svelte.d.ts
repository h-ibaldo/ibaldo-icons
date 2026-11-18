import { SvelteComponent } from 'svelte';

export interface CalendarSevenSlotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarSevenSlot extends SvelteComponent<CalendarSevenSlotProps> {}
