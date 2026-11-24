import { SvelteComponent } from 'svelte';

export interface ArrowUpSquareOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpSquareOut extends SvelteComponent<ArrowUpSquareOutProps> {}
