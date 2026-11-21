import { SvelteComponent } from 'svelte';

export interface PercentSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PercentSquare extends SvelteComponent<PercentSquareProps> {}
