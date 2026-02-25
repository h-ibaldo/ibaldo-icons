import { SvelteComponent } from 'svelte';

export interface FunnelFilter4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilter4 extends SvelteComponent<FunnelFilter4Props> {}
