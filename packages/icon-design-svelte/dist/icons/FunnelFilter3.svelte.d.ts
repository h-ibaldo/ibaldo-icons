import { SvelteComponent } from 'svelte';

export interface FunnelFilter3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilter3 extends SvelteComponent<FunnelFilter3Props> {}
