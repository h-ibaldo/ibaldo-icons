import { SvelteComponent } from 'svelte';

export interface LinkRaysSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkRaysSlim extends SvelteComponent<LinkRaysSlimProps> {}
