import { SvelteComponent } from 'svelte';

export interface LinkBrokenCornersSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenCornersSquare extends SvelteComponent<LinkBrokenCornersSquareProps> {}
