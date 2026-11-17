import { SvelteComponent } from 'svelte';

export interface LinkEditBarSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBarSmall extends SvelteComponent<LinkEditBarSmallProps> {}
