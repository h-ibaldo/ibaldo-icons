import { SvelteComponent } from 'svelte';

export interface HourglassSquareDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSquareDiagonal extends SvelteComponent<HourglassSquareDiagonalProps> {}
