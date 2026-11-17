import { SvelteComponent } from 'svelte';

export interface FunnelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Funnel extends SvelteComponent<FunnelProps> {}
