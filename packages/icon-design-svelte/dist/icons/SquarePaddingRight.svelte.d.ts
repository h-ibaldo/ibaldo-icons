import { SvelteComponent } from 'svelte';

export interface SquarePaddingRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquarePaddingRight extends SvelteComponent<SquarePaddingRightProps> {}
