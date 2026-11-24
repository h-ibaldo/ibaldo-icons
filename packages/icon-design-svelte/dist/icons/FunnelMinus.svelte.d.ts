import { SvelteComponent } from 'svelte';

export interface FunnelMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelMinus extends SvelteComponent<FunnelMinusProps> {}
