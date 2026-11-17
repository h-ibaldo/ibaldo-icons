import { SvelteComponent } from 'svelte';

export interface SquaresFourGrid2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquaresFourGrid2 extends SvelteComponent<SquaresFourGrid2Props> {}
