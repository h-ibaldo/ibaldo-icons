import { SvelteComponent } from 'svelte';

export interface SearchOneToOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchOneToOne extends SvelteComponent<SearchOneToOneProps> {}
