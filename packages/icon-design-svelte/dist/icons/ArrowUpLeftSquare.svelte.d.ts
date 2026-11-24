import { SvelteComponent } from 'svelte';

export interface ArrowUpLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpLeftSquare extends SvelteComponent<ArrowUpLeftSquareProps> {}
