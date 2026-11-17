import { SvelteComponent } from 'svelte';

export interface FunnelFilterMailSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilterMailSquare extends SvelteComponent<FunnelFilterMailSquareProps> {}
