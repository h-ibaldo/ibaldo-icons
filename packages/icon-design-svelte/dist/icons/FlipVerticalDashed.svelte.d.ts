import { SvelteComponent } from 'svelte';

export interface FlipVerticalDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlipVerticalDashed extends SvelteComponent<FlipVerticalDashedProps> {}
