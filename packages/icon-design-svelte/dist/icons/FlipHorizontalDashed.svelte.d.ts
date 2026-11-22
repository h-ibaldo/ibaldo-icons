import { SvelteComponent } from 'svelte';

export interface FlipHorizontalDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlipHorizontalDashed extends SvelteComponent<FlipHorizontalDashedProps> {}
