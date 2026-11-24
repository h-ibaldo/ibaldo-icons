import { SvelteComponent } from 'svelte';

export interface SearchPin2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchPin2 extends SvelteComponent<SearchPin2Props> {}
