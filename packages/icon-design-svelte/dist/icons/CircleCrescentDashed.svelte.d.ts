import { SvelteComponent } from 'svelte';

export interface CircleCrescentDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleCrescentDashed extends SvelteComponent<CircleCrescentDashedProps> {}
