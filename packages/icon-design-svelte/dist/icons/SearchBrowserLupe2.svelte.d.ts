import { SvelteComponent } from 'svelte';

export interface SearchBrowserLupe2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchBrowserLupe2 extends SvelteComponent<SearchBrowserLupe2Props> {}
