import { SvelteComponent } from 'svelte';

export interface LinkArrowUpSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpSlim extends SvelteComponent<LinkArrowUpSlimProps> {}
