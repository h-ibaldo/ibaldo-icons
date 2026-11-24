import { SvelteComponent } from 'svelte';

export interface SearchMinusBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchMinusB extends SvelteComponent<SearchMinusBProps> {}
