import { SvelteComponent } from 'svelte';

export interface SquareStackPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackPlusCircle extends SvelteComponent<SquareStackPlusCircleProps> {}
