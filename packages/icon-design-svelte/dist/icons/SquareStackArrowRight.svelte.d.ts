import { SvelteComponent } from 'svelte';

export interface SquareStackArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackArrowRight extends SvelteComponent<SquareStackArrowRightProps> {}
