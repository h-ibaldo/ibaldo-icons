import { SvelteComponent } from 'svelte';

export interface FunnelDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelDollar extends SvelteComponent<FunnelDollarProps> {}
