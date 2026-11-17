import { SvelteComponent } from 'svelte';

export interface LockNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockNarrow extends SvelteComponent<LockNarrowProps> {}
