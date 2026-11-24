import { SvelteComponent } from 'svelte';

export interface SearchBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchB extends SvelteComponent<SearchBProps> {}
