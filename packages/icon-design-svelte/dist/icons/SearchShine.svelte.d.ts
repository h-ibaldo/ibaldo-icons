import { SvelteComponent } from 'svelte';

export interface SearchShineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchShine extends SvelteComponent<SearchShineProps> {}
