import { SvelteComponent } from 'svelte';

export interface FunnelFilterSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilterSquare extends SvelteComponent<FunnelFilterSquareProps> {}
