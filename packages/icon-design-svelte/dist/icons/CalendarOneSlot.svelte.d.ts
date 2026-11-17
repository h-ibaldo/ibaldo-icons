import { SvelteComponent } from 'svelte';

export interface CalendarOneSlotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarOneSlot extends SvelteComponent<CalendarOneSlotProps> {}
