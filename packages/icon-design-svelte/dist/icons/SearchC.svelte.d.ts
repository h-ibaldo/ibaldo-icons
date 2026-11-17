import { SvelteComponent } from 'svelte';

export interface SearchCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchC extends SvelteComponent<SearchCProps> {}
