import { SvelteComponent } from 'svelte';

export interface Text2DSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text2DSquare extends SvelteComponent<Text2DSquareProps> {}
