import { SvelteComponent } from 'svelte';

export interface SquaresFourGrid1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquaresFourGrid1 extends SvelteComponent<SquaresFourGrid1Props> {}
