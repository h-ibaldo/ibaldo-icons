import { SvelteComponent } from 'svelte';

export interface FunnelFilter2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilter2 extends SvelteComponent<FunnelFilter2Props> {}
