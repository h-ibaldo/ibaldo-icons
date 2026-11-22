import { SvelteComponent } from 'svelte';

export interface FilterLinesPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesPlus extends SvelteComponent<FilterLinesPlusProps> {}
