import { SvelteComponent } from 'svelte';

export interface TextNSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextNSquare extends SvelteComponent<TextNSquareProps> {}
