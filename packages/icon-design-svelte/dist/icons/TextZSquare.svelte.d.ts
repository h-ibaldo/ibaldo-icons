import { SvelteComponent } from 'svelte';

export interface TextZSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextZSquare extends SvelteComponent<TextZSquareProps> {}
