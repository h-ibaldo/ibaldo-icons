import { SvelteComponent } from 'svelte';

export interface SquareStackSquareDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackSquareDashed extends SvelteComponent<SquareStackSquareDashedProps> {}
