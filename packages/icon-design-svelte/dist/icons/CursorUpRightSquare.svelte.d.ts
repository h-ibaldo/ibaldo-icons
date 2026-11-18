import { SvelteComponent } from 'svelte';

export interface CursorUpRightSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorUpRightSquare extends SvelteComponent<CursorUpRightSquareProps> {}
