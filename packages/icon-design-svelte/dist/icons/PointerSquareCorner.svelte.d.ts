import { SvelteComponent } from 'svelte';

export interface PointerSquareCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerSquareCorner extends SvelteComponent<PointerSquareCornerProps> {}
