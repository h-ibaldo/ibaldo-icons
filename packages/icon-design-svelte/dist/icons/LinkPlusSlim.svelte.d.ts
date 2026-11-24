import { SvelteComponent } from 'svelte';

export interface LinkPlusSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusSlim extends SvelteComponent<LinkPlusSlimProps> {}
