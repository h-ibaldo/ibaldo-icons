import { SvelteComponent } from 'svelte';

export interface SortDownWideNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SortDownWideNarrow extends SvelteComponent<SortDownWideNarrowProps> {}
