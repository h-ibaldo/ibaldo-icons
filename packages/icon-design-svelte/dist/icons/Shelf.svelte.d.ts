import { SvelteComponent } from 'svelte';

export interface ShelfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Shelf extends SvelteComponent<ShelfProps> {}
