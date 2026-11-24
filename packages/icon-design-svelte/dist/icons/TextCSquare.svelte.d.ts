import { SvelteComponent } from 'svelte';

export interface TextCSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextCSquare extends SvelteComponent<TextCSquareProps> {}
