import { SvelteComponent } from 'svelte';

export interface StopSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StopSquare extends SvelteComponent<StopSquareProps> {}
