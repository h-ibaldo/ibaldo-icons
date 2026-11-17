import { SvelteComponent } from 'svelte';

export interface SearchOneToOneBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchOneToOneB extends SvelteComponent<SearchOneToOneBProps> {}
