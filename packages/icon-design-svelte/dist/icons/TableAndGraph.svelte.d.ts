import { SvelteComponent } from 'svelte';

export interface TableAndGraphProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TableAndGraph extends SvelteComponent<TableAndGraphProps> {}
