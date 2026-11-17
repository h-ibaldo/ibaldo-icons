import { SvelteComponent } from 'svelte';

export interface FilterLinesSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesSquare extends SvelteComponent<FilterLinesSquareProps> {}
