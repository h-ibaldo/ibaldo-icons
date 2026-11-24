import { SvelteComponent } from 'svelte';

export interface TextFSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextFSquare extends SvelteComponent<TextFSquareProps> {}
