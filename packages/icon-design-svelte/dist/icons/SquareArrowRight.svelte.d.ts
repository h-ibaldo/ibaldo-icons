import { SvelteComponent } from 'svelte';

export interface SquareArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareArrowRight extends SvelteComponent<SquareArrowRightProps> {}
