import { SvelteComponent } from 'svelte';

export interface LinkCheckSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckSlim extends SvelteComponent<LinkCheckSlimProps> {}
