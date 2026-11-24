import { SvelteComponent } from 'svelte';

export interface FilterLinesSplitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesSplit extends SvelteComponent<FilterLinesSplitProps> {}
