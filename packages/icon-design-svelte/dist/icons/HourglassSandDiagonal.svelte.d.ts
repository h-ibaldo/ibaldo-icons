import { SvelteComponent } from 'svelte';

export interface HourglassSandDiagonalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSandDiagonal extends SvelteComponent<HourglassSandDiagonalProps> {}
