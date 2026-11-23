import { SvelteComponent } from 'svelte';

export interface TextSSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextSSquare extends SvelteComponent<TextSSquareProps> {}
