import { SvelteComponent } from 'svelte';

export interface SquareCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareCheckCircle extends SvelteComponent<SquareCheckCircleProps> {}
