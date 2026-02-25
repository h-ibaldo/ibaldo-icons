import { SvelteComponent } from 'svelte';

export interface UpvotePlusMinusArrowUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UpvotePlusMinusArrowUpDown extends SvelteComponent<UpvotePlusMinusArrowUpDownProps> {}
