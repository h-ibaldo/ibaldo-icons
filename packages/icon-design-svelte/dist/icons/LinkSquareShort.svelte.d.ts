import { SvelteComponent } from 'svelte';

export interface LinkSquareShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSquareShort extends SvelteComponent<LinkSquareShortProps> {}
