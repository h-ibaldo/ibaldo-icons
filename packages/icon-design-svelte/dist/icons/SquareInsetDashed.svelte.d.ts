import { SvelteComponent } from 'svelte';

export interface SquareInsetDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareInsetDashed extends SvelteComponent<SquareInsetDashedProps> {}
