import { SvelteComponent } from 'svelte';

export interface PlusSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlusSquare extends SvelteComponent<PlusSquareProps> {}
