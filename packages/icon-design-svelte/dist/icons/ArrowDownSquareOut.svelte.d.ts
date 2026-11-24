import { SvelteComponent } from 'svelte';

export interface ArrowDownSquareOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownSquareOut extends SvelteComponent<ArrowDownSquareOutProps> {}
