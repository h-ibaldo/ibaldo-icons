import { SvelteComponent } from 'svelte';

export interface LinkEditSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditSlim extends SvelteComponent<LinkEditSlimProps> {}
