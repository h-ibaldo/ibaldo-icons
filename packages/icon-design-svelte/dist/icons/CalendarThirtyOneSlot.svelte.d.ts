import { SvelteComponent } from 'svelte';

export interface CalendarThirtyOneSlotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarThirtyOneSlot extends SvelteComponent<CalendarThirtyOneSlotProps> {}
