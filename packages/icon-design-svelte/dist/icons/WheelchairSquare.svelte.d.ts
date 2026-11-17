import { SvelteComponent } from 'svelte';

export interface WheelchairSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WheelchairSquare extends SvelteComponent<WheelchairSquareProps> {}
