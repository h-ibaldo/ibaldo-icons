import { SvelteComponent } from 'svelte';

export interface SearchMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchMinus extends SvelteComponent<SearchMinusProps> {}
