import { SvelteComponent } from 'svelte';

export interface SearchCheckCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchCheckC extends SvelteComponent<SearchCheckCProps> {}
