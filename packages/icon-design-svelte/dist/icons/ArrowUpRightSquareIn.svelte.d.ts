import { SvelteComponent } from 'svelte';

export interface ArrowUpRightSquareInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRightSquareIn extends SvelteComponent<ArrowUpRightSquareInProps> {}
