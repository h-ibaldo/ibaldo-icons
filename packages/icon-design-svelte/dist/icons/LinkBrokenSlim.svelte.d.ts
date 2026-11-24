import { SvelteComponent } from 'svelte';

export interface LinkBrokenSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenSlim extends SvelteComponent<LinkBrokenSlimProps> {}
