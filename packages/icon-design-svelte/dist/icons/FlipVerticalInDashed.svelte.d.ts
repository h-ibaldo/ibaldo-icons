import { SvelteComponent } from 'svelte';

export interface FlipVerticalInDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlipVerticalInDashed extends SvelteComponent<FlipVerticalInDashedProps> {}
