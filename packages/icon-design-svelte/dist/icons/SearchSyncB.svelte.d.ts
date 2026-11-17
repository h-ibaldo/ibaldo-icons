import { SvelteComponent } from 'svelte';

export interface SearchSyncBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchSyncB extends SvelteComponent<SearchSyncBProps> {}
