import { SvelteComponent } from 'svelte';

export interface TextDSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextDSquare extends SvelteComponent<TextDSquareProps> {}
