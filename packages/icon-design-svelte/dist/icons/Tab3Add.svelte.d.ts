import { SvelteComponent } from 'svelte';

export interface Tab3AddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3Add extends SvelteComponent<Tab3AddProps> {}
