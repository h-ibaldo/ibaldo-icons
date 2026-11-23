import { SvelteComponent } from 'svelte';

export interface TextXSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextXSquare extends SvelteComponent<TextXSquareProps> {}
