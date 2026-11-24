import { SvelteComponent } from 'svelte';

export interface LinkDotsInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsInterlocked extends SvelteComponent<LinkDotsInterlockedProps> {}
