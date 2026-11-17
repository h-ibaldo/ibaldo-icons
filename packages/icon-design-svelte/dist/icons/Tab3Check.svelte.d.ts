import { SvelteComponent } from 'svelte';

export interface Tab3CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3Check extends SvelteComponent<Tab3CheckProps> {}
