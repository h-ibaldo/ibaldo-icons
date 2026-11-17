import { SvelteComponent } from 'svelte';

export interface LinkSquareOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSquareOpen extends SvelteComponent<LinkSquareOpenProps> {}
