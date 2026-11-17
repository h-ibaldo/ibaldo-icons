import { SvelteComponent } from 'svelte';

export interface SearchXBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchXB extends SvelteComponent<SearchXBProps> {}
