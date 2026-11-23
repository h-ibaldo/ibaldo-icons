import { SvelteComponent } from 'svelte';

export interface TableCellsMergeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TableCellsMerge extends SvelteComponent<TableCellsMergeProps> {}
