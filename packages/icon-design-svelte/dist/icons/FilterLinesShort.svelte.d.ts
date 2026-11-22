import { SvelteComponent } from 'svelte';

export interface FilterLinesShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesShort extends SvelteComponent<FilterLinesShortProps> {}
