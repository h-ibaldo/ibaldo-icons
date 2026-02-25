import { SvelteComponent } from 'svelte';

export interface ListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class List extends SvelteComponent<ListProps> {}
