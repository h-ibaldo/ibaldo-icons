import { SvelteComponent } from 'svelte';

export interface CalendarGridDenseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarGridDense extends SvelteComponent<CalendarGridDenseProps> {}
