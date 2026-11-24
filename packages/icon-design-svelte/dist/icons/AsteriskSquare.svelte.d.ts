import { SvelteComponent } from 'svelte';

export interface AsteriskSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AsteriskSquare extends SvelteComponent<AsteriskSquareProps> {}
