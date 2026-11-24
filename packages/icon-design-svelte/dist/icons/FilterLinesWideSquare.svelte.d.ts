import { SvelteComponent } from 'svelte';

export interface FilterLinesWideSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesWideSquare extends SvelteComponent<FilterLinesWideSquareProps> {}
