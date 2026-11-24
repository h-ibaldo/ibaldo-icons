import { SvelteComponent } from 'svelte';

export interface SquareColumnsTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareColumnsTwo extends SvelteComponent<SquareColumnsTwoProps> {}
