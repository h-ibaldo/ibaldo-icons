import { SvelteComponent } from 'svelte';

export interface SortUpWideNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SortUpWideNarrow extends SvelteComponent<SortUpWideNarrowProps> {}
