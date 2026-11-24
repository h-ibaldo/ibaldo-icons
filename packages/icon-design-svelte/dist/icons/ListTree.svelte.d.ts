import { SvelteComponent } from 'svelte';

export interface ListTreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListTree extends SvelteComponent<ListTreeProps> {}
