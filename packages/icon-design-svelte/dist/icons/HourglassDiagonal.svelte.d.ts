import { SvelteComponent } from 'svelte';

export interface HourglassDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassDiagonal extends SvelteComponent<HourglassDiagonalProps> {}
