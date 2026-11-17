import { SvelteComponent } from 'svelte';

export interface ListSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListSearch extends SvelteComponent<ListSearchProps> {}
