import { SvelteComponent } from 'svelte';

export interface SquareStackCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackCircle extends SvelteComponent<SquareStackCircleProps> {}
