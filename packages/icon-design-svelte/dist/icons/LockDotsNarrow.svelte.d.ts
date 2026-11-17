import { SvelteComponent } from 'svelte';

export interface LockDotsNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockDotsNarrow extends SvelteComponent<LockDotsNarrowProps> {}
