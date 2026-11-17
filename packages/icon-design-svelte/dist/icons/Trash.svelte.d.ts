import { SvelteComponent } from 'svelte';

export interface TrashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Trash extends SvelteComponent<TrashProps> {}
