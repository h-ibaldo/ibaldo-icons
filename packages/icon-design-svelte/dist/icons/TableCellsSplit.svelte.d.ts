import { SvelteComponent } from 'svelte';

export interface TableCellsSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TableCellsSplit extends SvelteComponent<TableCellsSplitProps> {}
