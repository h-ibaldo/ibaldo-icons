import { SvelteComponent } from 'svelte';

export interface TextVSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextVSquare extends SvelteComponent<TextVSquareProps> {}
