import { SvelteComponent } from 'svelte';

export interface SearchCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchCheck extends SvelteComponent<SearchCheckProps> {}
