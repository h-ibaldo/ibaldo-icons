import { SvelteComponent } from 'svelte';

export interface TextMSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextMSquare extends SvelteComponent<TextMSquareProps> {}
