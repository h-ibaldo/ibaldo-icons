import { SvelteComponent } from 'svelte';

export interface TextWSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextWSquare extends SvelteComponent<TextWSquareProps> {}
