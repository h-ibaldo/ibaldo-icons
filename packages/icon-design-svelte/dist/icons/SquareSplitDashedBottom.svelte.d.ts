import { SvelteComponent } from 'svelte';

export interface SquareSplitDashedBottomProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSplitDashedBottom extends SvelteComponent<SquareSplitDashedBottomProps> {}
