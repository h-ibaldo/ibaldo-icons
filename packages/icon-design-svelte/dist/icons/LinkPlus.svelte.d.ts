import { SvelteComponent } from 'svelte';

export interface LinkPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlus extends SvelteComponent<LinkPlusProps> {}
