import { SvelteComponent } from 'svelte';

export interface FunnelCoinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelCoin extends SvelteComponent<FunnelCoinProps> {}
