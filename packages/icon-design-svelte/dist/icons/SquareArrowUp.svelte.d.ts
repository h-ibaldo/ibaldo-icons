import { SvelteComponent } from 'svelte';

export interface SquareArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareArrowUp extends SvelteComponent<SquareArrowUpProps> {}
