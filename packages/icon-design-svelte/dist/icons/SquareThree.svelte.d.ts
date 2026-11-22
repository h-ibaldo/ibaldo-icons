import { SvelteComponent } from 'svelte';

export interface SquareThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareThree extends SvelteComponent<SquareThreeProps> {}
