import { SvelteComponent } from 'svelte';

export interface Tab3XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3X extends SvelteComponent<Tab3XProps> {}
