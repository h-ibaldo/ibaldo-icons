import { SvelteComponent } from 'svelte';

export interface TextGSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextGSquare extends SvelteComponent<TextGSquareProps> {}
