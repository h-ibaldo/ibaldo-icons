import { SvelteComponent } from 'svelte';

export interface Tab3RemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3Remove extends SvelteComponent<Tab3RemoveProps> {}
