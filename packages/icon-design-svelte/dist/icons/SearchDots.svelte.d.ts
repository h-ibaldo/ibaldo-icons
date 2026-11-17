import { SvelteComponent } from 'svelte';

export interface SearchDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchDots extends SvelteComponent<SearchDotsProps> {}
