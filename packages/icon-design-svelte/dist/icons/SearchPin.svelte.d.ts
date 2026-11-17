import { SvelteComponent } from 'svelte';

export interface SearchPinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchPin extends SvelteComponent<SearchPinProps> {}
