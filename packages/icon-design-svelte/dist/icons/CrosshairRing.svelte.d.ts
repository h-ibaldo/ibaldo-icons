import { SvelteComponent } from 'svelte';

export interface CrosshairRingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrosshairRing extends SvelteComponent<CrosshairRingProps> {}
