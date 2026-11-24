import { SvelteComponent } from 'svelte';

export interface SearchPlusBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchPlusB extends SvelteComponent<SearchPlusBProps> {}
