import { SvelteComponent } from 'svelte';

export interface PowerSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PowerSquare extends SvelteComponent<PowerSquareProps> {}
