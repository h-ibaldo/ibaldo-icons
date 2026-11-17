import { SvelteComponent } from 'svelte';

export interface Lock4OpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock4Open extends SvelteComponent<Lock4OpenProps> {}
