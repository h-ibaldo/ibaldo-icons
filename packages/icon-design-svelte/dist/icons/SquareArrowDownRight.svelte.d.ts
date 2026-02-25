import { SvelteComponent } from 'svelte';

export interface SquareArrowDownRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareArrowDownRight extends SvelteComponent<SquareArrowDownRightProps> {}
