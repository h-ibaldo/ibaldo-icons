import { SvelteComponent } from 'svelte';

export interface Lock3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3Check extends SvelteComponent<Lock3CheckProps> {}
