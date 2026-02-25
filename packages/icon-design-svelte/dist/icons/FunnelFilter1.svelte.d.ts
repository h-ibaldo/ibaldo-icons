import { SvelteComponent } from 'svelte';

export interface FunnelFilter1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilter1 extends SvelteComponent<FunnelFilter1Props> {}
