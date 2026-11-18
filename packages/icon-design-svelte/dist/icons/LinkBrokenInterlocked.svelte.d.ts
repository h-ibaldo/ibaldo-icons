import { SvelteComponent } from 'svelte';

export interface LinkBrokenInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenInterlocked extends SvelteComponent<LinkBrokenInterlockedProps> {}
