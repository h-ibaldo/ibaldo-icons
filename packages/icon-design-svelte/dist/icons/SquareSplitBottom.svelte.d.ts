import { SvelteComponent } from 'svelte';

export interface SquareSplitBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSplitBottom extends SvelteComponent<SquareSplitBottomProps> {}
