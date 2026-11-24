import { SvelteComponent } from 'svelte';

export interface SquareSplitTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSplitTop extends SvelteComponent<SquareSplitTopProps> {}
