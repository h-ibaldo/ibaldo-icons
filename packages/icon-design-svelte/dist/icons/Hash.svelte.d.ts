import { SvelteComponent } from 'svelte';

export interface HashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Hash extends SvelteComponent<HashProps> {}
