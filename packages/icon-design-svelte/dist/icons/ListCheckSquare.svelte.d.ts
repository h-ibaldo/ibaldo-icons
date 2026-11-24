import { SvelteComponent } from 'svelte';

export interface ListCheckSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListCheckSquare extends SvelteComponent<ListCheckSquareProps> {}
