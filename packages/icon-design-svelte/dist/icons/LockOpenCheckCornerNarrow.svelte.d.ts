import { SvelteComponent } from 'svelte';

export interface LockOpenCheckCornerNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenCheckCornerNarrow extends SvelteComponent<LockOpenCheckCornerNarrowProps> {}
