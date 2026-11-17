import { SvelteComponent } from 'svelte';

export interface XUnderlineSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class XUnderlineSquare extends SvelteComponent<XUnderlineSquareProps> {}
