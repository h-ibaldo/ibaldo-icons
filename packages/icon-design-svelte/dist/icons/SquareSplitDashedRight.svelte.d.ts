import { SvelteComponent } from 'svelte';

export interface SquareSplitDashedRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSplitDashedRight extends SvelteComponent<SquareSplitDashedRightProps> {}
