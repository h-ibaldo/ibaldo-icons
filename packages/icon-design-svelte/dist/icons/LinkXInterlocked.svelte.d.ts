import { SvelteComponent } from 'svelte';

export interface LinkXInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXInterlocked extends SvelteComponent<LinkXInterlockedProps> {}
