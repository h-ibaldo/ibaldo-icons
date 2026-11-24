import { SvelteComponent } from 'svelte';

export interface SearchDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchDownload extends SvelteComponent<SearchDownloadProps> {}
