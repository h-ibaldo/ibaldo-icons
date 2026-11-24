import { SvelteComponent } from 'svelte';

export interface TextPSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextPSquare extends SvelteComponent<TextPSquareProps> {}
