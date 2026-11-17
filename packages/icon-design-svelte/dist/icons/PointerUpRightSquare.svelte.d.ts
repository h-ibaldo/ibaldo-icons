import { SvelteComponent } from 'svelte';

export interface PointerUpRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerUpRightSquare extends SvelteComponent<PointerUpRightSquareProps> {}
