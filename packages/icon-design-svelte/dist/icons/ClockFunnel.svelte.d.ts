import { SvelteComponent } from 'svelte';

export interface ClockFunnelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockFunnel extends SvelteComponent<ClockFunnelProps> {}
