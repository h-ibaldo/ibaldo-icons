import { SvelteComponent } from 'svelte';

export interface FunnelXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelX extends SvelteComponent<FunnelXProps> {}
