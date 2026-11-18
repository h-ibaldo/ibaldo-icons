import { SvelteComponent } from 'svelte';

export interface ArrowUturnUpSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnUpSquare extends SvelteComponent<ArrowUturnUpSquareProps> {}
