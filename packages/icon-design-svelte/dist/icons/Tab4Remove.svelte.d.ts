import { SvelteComponent } from 'svelte';

export interface Tab4RemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4Remove extends SvelteComponent<Tab4RemoveProps> {}
