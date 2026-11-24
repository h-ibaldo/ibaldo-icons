import { SvelteComponent } from 'svelte';

export interface SquaresSubtractProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquaresSubtract extends SvelteComponent<SquaresSubtractProps> {}
