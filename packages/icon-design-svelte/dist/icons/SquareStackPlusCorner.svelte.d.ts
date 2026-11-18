import { SvelteComponent } from 'svelte';

export interface SquareStackPlusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackPlusCorner extends SvelteComponent<SquareStackPlusCornerProps> {}
