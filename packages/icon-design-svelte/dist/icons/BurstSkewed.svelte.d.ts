import { SvelteComponent } from 'svelte';

export interface BurstSkewedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BurstSkewed extends SvelteComponent<BurstSkewedProps> {}
