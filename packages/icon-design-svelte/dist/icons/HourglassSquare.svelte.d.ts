import { SvelteComponent } from 'svelte';

export interface HourglassSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassSquare extends SvelteComponent<HourglassSquareProps> {}
