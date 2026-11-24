import { SvelteComponent } from 'svelte';

export interface SquareSplitDashedLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSplitDashedLeft extends SvelteComponent<SquareSplitDashedLeftProps> {}
