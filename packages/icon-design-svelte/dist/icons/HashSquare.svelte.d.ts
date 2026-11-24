import { SvelteComponent } from 'svelte';

export interface HashSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HashSquare extends SvelteComponent<HashSquareProps> {}
