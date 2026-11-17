import { SvelteComponent } from 'svelte';

export interface Tab4XProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4X extends SvelteComponent<Tab4XProps> {}
