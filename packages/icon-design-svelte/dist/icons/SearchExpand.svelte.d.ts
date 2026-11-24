import { SvelteComponent } from 'svelte';

export interface SearchExpandProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchExpand extends SvelteComponent<SearchExpandProps> {}
