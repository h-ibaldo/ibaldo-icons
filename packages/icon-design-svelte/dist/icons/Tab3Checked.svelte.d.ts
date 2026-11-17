import { SvelteComponent } from 'svelte';

export interface Tab3CheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3Checked extends SvelteComponent<Tab3CheckedProps> {}
