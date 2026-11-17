import { SvelteComponent } from 'svelte';

export interface TableGraphProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TableGraph extends SvelteComponent<TableGraphProps> {}
