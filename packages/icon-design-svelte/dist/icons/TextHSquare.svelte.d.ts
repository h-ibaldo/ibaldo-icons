import { SvelteComponent } from 'svelte';

export interface TextHSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextHSquare extends SvelteComponent<TextHSquareProps> {}
