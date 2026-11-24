import { SvelteComponent } from 'svelte';

export interface TextJSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextJSquare extends SvelteComponent<TextJSquareProps> {}
