import { SvelteComponent } from 'svelte';

export interface LinkMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinus extends SvelteComponent<LinkMinusProps> {}
