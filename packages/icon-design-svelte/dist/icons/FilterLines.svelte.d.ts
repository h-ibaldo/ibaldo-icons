import { SvelteComponent } from 'svelte';

export interface FilterLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLines extends SvelteComponent<FilterLinesProps> {}
