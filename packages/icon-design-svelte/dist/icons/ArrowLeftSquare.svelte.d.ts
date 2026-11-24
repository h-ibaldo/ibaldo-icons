import { SvelteComponent } from 'svelte';

export interface ArrowLeftSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftSquare extends SvelteComponent<ArrowLeftSquareProps> {}
