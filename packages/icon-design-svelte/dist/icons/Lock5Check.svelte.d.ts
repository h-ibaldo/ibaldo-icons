import { SvelteComponent } from 'svelte';

export interface Lock5CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5Check extends SvelteComponent<Lock5CheckProps> {}
