import { SvelteComponent } from 'svelte';

export interface FlipVerticalInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlipVerticalIn extends SvelteComponent<FlipVerticalInProps> {}
