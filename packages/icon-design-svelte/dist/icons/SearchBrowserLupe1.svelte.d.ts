import { SvelteComponent } from 'svelte';

export interface SearchBrowserLupe1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchBrowserLupe1 extends SvelteComponent<SearchBrowserLupe1Props> {}
