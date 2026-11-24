import { SvelteComponent } from 'svelte';

export interface SearchDotsBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchDotsB extends SvelteComponent<SearchDotsBProps> {}
