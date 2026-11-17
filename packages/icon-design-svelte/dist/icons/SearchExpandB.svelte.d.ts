import { SvelteComponent } from 'svelte';

export interface SearchExpandBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchExpandB extends SvelteComponent<SearchExpandBProps> {}
