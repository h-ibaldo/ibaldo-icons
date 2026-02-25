import { SvelteComponent } from 'svelte';

export interface SquareArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareArrowDown extends SvelteComponent<SquareArrowDownProps> {}
