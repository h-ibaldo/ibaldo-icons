import { SvelteComponent } from 'svelte';

export interface Bell5XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5X extends SvelteComponent<Bell5XProps> {}
