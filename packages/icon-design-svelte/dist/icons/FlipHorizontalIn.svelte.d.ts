import { SvelteComponent } from 'svelte';

export interface FlipHorizontalInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlipHorizontalIn extends SvelteComponent<FlipHorizontalInProps> {}
