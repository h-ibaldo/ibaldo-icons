import { SvelteComponent } from 'svelte';

export interface CrosshairDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CrosshairDot extends SvelteComponent<CrosshairDotProps> {}
