import { SvelteComponent } from 'svelte';

export interface LockCheckCornerNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCheckCornerNarrow extends SvelteComponent<LockCheckCornerNarrowProps> {}
