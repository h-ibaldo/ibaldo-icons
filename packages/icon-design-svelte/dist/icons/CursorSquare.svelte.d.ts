import { SvelteComponent } from 'svelte';

export interface CursorSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorSquare extends SvelteComponent<CursorSquareProps> {}
