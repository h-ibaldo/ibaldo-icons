import { SvelteComponent } from 'svelte';

export interface Tab3PlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3Plus extends SvelteComponent<Tab3PlusProps> {}
