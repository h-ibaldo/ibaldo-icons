import { SvelteComponent } from 'svelte';

export interface ListXSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListXSquare extends SvelteComponent<ListXSquareProps> {}
