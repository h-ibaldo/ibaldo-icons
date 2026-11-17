import { SvelteComponent } from 'svelte';

export interface LinkInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkInterlocked extends SvelteComponent<LinkInterlockedProps> {}
