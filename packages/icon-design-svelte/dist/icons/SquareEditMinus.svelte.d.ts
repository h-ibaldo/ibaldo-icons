import { SvelteComponent } from 'svelte';

export interface SquareEditMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareEditMinus extends SvelteComponent<SquareEditMinusProps> {}
