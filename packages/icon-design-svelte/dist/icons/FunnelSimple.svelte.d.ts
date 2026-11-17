import { SvelteComponent } from 'svelte';

export interface FunnelSimpleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelSimple extends SvelteComponent<FunnelSimpleProps> {}
