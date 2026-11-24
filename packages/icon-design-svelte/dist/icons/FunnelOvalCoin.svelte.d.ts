import { SvelteComponent } from 'svelte';

export interface FunnelOvalCoinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelOvalCoin extends SvelteComponent<FunnelOvalCoinProps> {}
