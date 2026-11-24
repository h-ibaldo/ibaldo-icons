import { SvelteComponent } from 'svelte';

export interface SearchCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchCode extends SvelteComponent<SearchCodeProps> {}
