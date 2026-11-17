import { SvelteComponent } from 'svelte';

export interface SearchXCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchXC extends SvelteComponent<SearchXCProps> {}
