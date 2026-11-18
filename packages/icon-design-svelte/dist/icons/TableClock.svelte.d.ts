import { SvelteComponent } from 'svelte';

export interface TableClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TableClock extends SvelteComponent<TableClockProps> {}
