import { SvelteComponent } from 'svelte';

export interface SearchExpandCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchExpandC extends SvelteComponent<SearchExpandCProps> {}
