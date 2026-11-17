import { SvelteComponent } from 'svelte';

export interface SearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Search extends SvelteComponent<SearchProps> {}
