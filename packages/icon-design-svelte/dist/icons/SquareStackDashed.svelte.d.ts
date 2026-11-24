import { SvelteComponent } from 'svelte';

export interface SquareStackDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackDashed extends SvelteComponent<SquareStackDashedProps> {}
