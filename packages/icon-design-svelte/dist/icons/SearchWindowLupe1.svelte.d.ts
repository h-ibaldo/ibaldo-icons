import { SvelteComponent } from 'svelte';

export interface SearchWindowLupe1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchWindowLupe1 extends SvelteComponent<SearchWindowLupe1Props> {}
