import { SvelteComponent } from 'svelte';

export interface SearchPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchPlus extends SvelteComponent<SearchPlusProps> {}
