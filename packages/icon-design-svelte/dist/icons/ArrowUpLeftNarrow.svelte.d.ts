import { SvelteComponent } from 'svelte';

export interface ArrowUpLeftNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpLeftNarrow extends SvelteComponent<ArrowUpLeftNarrowProps> {}
