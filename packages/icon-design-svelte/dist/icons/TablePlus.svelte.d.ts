import { SvelteComponent } from 'svelte';

export interface TablePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TablePlus extends SvelteComponent<TablePlusProps> {}
