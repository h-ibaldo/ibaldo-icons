import { SvelteComponent } from 'svelte';

export interface LinkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Link extends SvelteComponent<LinkProps> {}
