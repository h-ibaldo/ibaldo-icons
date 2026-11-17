import { SvelteComponent } from 'svelte';

export interface LinkArrowUpInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkArrowUpInterlocked extends SvelteComponent<LinkArrowUpInterlockedProps> {}
