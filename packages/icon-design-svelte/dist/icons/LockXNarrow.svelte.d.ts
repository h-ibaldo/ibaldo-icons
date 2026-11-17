import { SvelteComponent } from 'svelte';

export interface LockXNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockXNarrow extends SvelteComponent<LockXNarrowProps> {}
