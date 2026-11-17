import { SvelteComponent } from 'svelte';

export interface LinkMenuSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuSlim extends SvelteComponent<LinkMenuSlimProps> {}
