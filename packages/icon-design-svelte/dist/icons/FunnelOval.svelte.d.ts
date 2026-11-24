import { SvelteComponent } from 'svelte';

export interface FunnelOvalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelOval extends SvelteComponent<FunnelOvalProps> {}
