import { SvelteComponent } from 'svelte';

export interface LinkSplitSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSplitSquare extends SvelteComponent<LinkSplitSquareProps> {}
