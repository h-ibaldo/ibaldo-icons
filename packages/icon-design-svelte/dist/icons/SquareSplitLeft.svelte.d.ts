import { SvelteComponent } from 'svelte';

export interface SquareSplitLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareSplitLeft extends SvelteComponent<SquareSplitLeftProps> {}
