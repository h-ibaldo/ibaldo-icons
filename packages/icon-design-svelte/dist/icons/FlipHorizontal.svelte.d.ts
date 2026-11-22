import { SvelteComponent } from 'svelte';

export interface FlipHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FlipHorizontal extends SvelteComponent<FlipHorizontalProps> {}
