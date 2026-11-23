import { SvelteComponent } from 'svelte';

export interface TextKSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TextKSquare extends SvelteComponent<TextKSquareProps> {}
