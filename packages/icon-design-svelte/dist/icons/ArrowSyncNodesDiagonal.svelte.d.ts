import { SvelteComponent } from 'svelte';

export interface ArrowSyncNodesDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncNodesDiagonal extends SvelteComponent<ArrowSyncNodesDiagonalProps> {}
