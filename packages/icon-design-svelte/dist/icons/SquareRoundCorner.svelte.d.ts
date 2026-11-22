import { SvelteComponent } from 'svelte';

export interface SquareRoundCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareRoundCorner extends SvelteComponent<SquareRoundCornerProps> {}
