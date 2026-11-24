import { SvelteComponent } from 'svelte';

export interface LockOpenCheckNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockOpenCheckNarrow extends SvelteComponent<LockOpenCheckNarrowProps> {}
