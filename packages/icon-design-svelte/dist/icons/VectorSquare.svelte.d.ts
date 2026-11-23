import { SvelteComponent } from 'svelte';

export interface VectorSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VectorSquare extends SvelteComponent<VectorSquareProps> {}
