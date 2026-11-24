import { SvelteComponent } from 'svelte';

export interface SquareDoubleArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareDoubleArrowUp extends SvelteComponent<SquareDoubleArrowUpProps> {}
