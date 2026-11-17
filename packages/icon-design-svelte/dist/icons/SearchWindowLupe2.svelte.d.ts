import { SvelteComponent } from 'svelte';

export interface SearchWindowLupe2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SearchWindowLupe2 extends SvelteComponent<SearchWindowLupe2Props> {}
