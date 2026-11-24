import { SvelteComponent } from 'svelte';

export interface SquareSplitRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSplitRight extends SvelteComponent<SquareSplitRightProps> {}
