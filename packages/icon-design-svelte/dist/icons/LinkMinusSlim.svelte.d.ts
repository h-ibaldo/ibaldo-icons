import { SvelteComponent } from 'svelte';

export interface LinkMinusSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusSlim extends SvelteComponent<LinkMinusSlimProps> {}
