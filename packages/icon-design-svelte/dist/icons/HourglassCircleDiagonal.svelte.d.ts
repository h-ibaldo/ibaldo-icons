import { SvelteComponent } from 'svelte';

export interface HourglassCircleDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassCircleDiagonal extends SvelteComponent<HourglassCircleDiagonalProps> {}
