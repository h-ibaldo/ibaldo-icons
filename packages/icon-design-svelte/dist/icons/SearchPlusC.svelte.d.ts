import { SvelteComponent } from 'svelte';

export interface SearchPlusCProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchPlusC extends SvelteComponent<SearchPlusCProps> {}
