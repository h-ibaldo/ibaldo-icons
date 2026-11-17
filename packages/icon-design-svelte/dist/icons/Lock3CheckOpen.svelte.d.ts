import { SvelteComponent } from 'svelte';

export interface Lock3CheckOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3CheckOpen extends SvelteComponent<Lock3CheckOpenProps> {}
