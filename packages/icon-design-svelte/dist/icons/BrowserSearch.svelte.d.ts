import { SvelteComponent } from 'svelte';

export interface BrowserSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserSearch extends SvelteComponent<BrowserSearchProps> {}
