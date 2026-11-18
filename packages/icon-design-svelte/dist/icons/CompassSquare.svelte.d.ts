import { SvelteComponent } from 'svelte';

export interface CompassSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassSquare extends SvelteComponent<CompassSquareProps> {}
