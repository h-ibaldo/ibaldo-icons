import { SvelteComponent } from 'svelte';

export interface FunnelRimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelRim extends SvelteComponent<FunnelRimProps> {}
