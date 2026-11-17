import { SvelteComponent } from 'svelte';

export interface TextASquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextASquare extends SvelteComponent<TextASquareProps> {}
