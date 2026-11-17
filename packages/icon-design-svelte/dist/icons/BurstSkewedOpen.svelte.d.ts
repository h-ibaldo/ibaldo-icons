import { SvelteComponent } from 'svelte';

export interface BurstSkewedOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BurstSkewedOpen extends SvelteComponent<BurstSkewedOpenProps> {}
