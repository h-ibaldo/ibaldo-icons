import { SvelteComponent } from 'svelte';

export interface SearchDotsCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchDotsC extends SvelteComponent<SearchDotsCProps> {}
