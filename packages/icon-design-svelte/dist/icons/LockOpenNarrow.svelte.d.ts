import { SvelteComponent } from 'svelte';

export interface LockOpenNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenNarrow extends SvelteComponent<LockOpenNarrowProps> {}
