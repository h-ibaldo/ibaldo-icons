import { SvelteComponent } from 'svelte';

export interface SearchPinBProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchPinB extends SvelteComponent<SearchPinBProps> {}
