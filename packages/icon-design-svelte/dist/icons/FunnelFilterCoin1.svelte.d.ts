import { SvelteComponent } from 'svelte';

export interface FunnelFilterCoin1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilterCoin1 extends SvelteComponent<FunnelFilterCoin1Props> {}
