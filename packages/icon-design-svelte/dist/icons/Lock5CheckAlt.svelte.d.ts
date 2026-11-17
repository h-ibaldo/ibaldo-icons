import { SvelteComponent } from 'svelte';

export interface Lock5CheckAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5CheckAlt extends SvelteComponent<Lock5CheckAltProps> {}
