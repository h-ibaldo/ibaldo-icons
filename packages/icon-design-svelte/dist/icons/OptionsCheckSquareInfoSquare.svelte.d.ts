import { SvelteComponent } from 'svelte';

export interface OptionsCheckSquareInfoSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OptionsCheckSquareInfoSquare extends SvelteComponent<OptionsCheckSquareInfoSquareProps> {}
