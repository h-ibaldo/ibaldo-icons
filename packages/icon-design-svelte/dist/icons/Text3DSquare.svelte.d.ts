import { SvelteComponent } from 'svelte';

export interface Text3DSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text3DSquare extends SvelteComponent<Text3DSquareProps> {}
