import { SvelteComponent } from 'svelte';

export interface PulseSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PulseSquare extends SvelteComponent<PulseSquareProps> {}
