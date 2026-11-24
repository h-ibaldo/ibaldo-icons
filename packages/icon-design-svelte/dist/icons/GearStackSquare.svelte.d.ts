import { SvelteComponent } from 'svelte';

export interface GearStackSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearStackSquare extends SvelteComponent<GearStackSquareProps> {}
