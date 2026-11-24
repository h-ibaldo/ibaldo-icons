import { SvelteComponent } from 'svelte';

export interface LinkXSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXSlim extends SvelteComponent<LinkXSlimProps> {}
