import { SvelteComponent } from 'svelte';

export interface LinkSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSlim extends SvelteComponent<LinkSlimProps> {}
