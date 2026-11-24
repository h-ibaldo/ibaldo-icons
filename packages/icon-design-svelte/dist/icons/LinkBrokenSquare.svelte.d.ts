import { SvelteComponent } from 'svelte';

export interface LinkBrokenSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenSquare extends SvelteComponent<LinkBrokenSquareProps> {}
