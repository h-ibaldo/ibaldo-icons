import { SvelteComponent } from 'svelte';

export interface CalendarDottedSparseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CalendarDottedSparse extends SvelteComponent<CalendarDottedSparseProps> {}
