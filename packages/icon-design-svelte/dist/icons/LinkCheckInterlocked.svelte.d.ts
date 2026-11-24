import { SvelteComponent } from 'svelte';

export interface LinkCheckInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckInterlocked extends SvelteComponent<LinkCheckInterlockedProps> {}
