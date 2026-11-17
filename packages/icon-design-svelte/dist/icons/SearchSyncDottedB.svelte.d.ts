import { SvelteComponent } from 'svelte';

export interface SearchSyncDottedBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchSyncDottedB extends SvelteComponent<SearchSyncDottedBProps> {}
