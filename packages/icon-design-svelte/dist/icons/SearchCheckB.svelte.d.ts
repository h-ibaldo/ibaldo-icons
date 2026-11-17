import { SvelteComponent } from 'svelte';

export interface SearchCheckBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchCheckB extends SvelteComponent<SearchCheckBProps> {}
