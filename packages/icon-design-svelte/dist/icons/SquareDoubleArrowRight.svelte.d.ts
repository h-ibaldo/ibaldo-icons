import { SvelteComponent } from 'svelte';

export interface SquareDoubleArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareDoubleArrowRight extends SvelteComponent<SquareDoubleArrowRightProps> {}
