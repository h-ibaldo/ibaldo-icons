import { SvelteComponent } from 'svelte';

export interface ArrowSyncDiamondProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncDiamond extends SvelteComponent<ArrowSyncDiamondProps> {}
