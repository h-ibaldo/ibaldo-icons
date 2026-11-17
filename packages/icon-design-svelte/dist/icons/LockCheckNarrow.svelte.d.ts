import { SvelteComponent } from 'svelte';

export interface LockCheckNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockCheckNarrow extends SvelteComponent<LockCheckNarrowProps> {}
