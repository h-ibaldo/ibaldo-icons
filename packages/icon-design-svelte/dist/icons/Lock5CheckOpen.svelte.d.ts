import { SvelteComponent } from 'svelte';

export interface Lock5CheckOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5CheckOpen extends SvelteComponent<Lock5CheckOpenProps> {}
