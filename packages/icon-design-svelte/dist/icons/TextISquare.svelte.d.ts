import { SvelteComponent } from 'svelte';

export interface TextISquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextISquare extends SvelteComponent<TextISquareProps> {}
