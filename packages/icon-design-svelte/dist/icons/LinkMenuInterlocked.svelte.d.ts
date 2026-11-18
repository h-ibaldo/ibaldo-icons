import { SvelteComponent } from 'svelte';

export interface LinkMenuInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuInterlocked extends SvelteComponent<LinkMenuInterlockedProps> {}
