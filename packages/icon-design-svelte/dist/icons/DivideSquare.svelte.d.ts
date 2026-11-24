import { SvelteComponent } from 'svelte';

export interface DivideSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DivideSquare extends SvelteComponent<DivideSquareProps> {}
