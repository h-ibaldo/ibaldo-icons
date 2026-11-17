import { SvelteComponent } from 'svelte';

export interface SquareStackArrowBendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackArrowBend extends SvelteComponent<SquareStackArrowBendProps> {}
