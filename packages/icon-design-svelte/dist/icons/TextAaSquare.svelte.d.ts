import { SvelteComponent } from 'svelte';

export interface TextAaSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextAaSquare extends SvelteComponent<TextAaSquareProps> {}
