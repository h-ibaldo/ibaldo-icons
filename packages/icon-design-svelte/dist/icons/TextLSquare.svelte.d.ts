import { SvelteComponent } from 'svelte';

export interface TextLSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextLSquare extends SvelteComponent<TextLSquareProps> {}
