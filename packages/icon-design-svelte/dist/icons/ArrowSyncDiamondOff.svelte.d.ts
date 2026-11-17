import { SvelteComponent } from 'svelte';

export interface ArrowSyncDiamondOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowSyncDiamondOff extends SvelteComponent<ArrowSyncDiamondOffProps> {}
