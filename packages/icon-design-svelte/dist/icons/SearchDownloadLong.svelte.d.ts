import { SvelteComponent } from 'svelte';

export interface SearchDownloadLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchDownloadLong extends SvelteComponent<SearchDownloadLongProps> {}
