import { SvelteComponent } from 'svelte';

export interface Lock3OpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock3Open extends SvelteComponent<Lock3OpenProps> {}
