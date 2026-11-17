import { SvelteComponent } from 'svelte';

export interface LinkMinusInterlockedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusInterlocked extends SvelteComponent<LinkMinusInterlockedProps> {}
