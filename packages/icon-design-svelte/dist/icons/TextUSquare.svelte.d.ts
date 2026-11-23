import { SvelteComponent } from 'svelte';

export interface TextUSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextUSquare extends SvelteComponent<TextUSquareProps> {}
