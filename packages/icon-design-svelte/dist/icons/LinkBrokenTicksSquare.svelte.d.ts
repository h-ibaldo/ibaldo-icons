import { SvelteComponent } from 'svelte';

export interface LinkBrokenTicksSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenTicksSquare extends SvelteComponent<LinkBrokenTicksSquareProps> {}
