import { SvelteComponent } from 'svelte';

export interface TextRSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextRSquare extends SvelteComponent<TextRSquareProps> {}
