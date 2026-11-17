import { SvelteComponent } from 'svelte';

export interface SearchRefreshProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchRefresh extends SvelteComponent<SearchRefreshProps> {}
