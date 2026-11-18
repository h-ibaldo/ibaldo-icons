import { SvelteComponent } from 'svelte';

export interface BorderHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BorderHorizontal extends SvelteComponent<BorderHorizontalProps> {}
