import { SvelteComponent } from 'svelte';

export interface SearchXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchX extends SvelteComponent<SearchXProps> {}
