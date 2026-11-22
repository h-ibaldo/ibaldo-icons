import { SvelteComponent } from 'svelte';

export interface FunnelPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelPlus extends SvelteComponent<FunnelPlusProps> {}
