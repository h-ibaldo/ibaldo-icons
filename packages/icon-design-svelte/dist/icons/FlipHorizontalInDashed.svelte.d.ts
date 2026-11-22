import { SvelteComponent } from 'svelte';

export interface FlipHorizontalInDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlipHorizontalInDashed extends SvelteComponent<FlipHorizontalInDashedProps> {}
