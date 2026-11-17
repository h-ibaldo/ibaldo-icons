import { SvelteComponent } from 'svelte';

export interface SkipForwardDoubleSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SkipForwardDoubleSquare extends SvelteComponent<SkipForwardDoubleSquareProps> {}
