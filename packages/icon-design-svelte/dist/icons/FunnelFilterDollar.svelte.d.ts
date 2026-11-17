import { SvelteComponent } from 'svelte';

export interface FunnelFilterDollarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilterDollar extends SvelteComponent<FunnelFilterDollarProps> {}
