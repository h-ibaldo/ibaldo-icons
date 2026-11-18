import { SvelteComponent } from 'svelte';

export interface LinkPlusInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusInterlocked extends SvelteComponent<LinkPlusInterlockedProps> {}
