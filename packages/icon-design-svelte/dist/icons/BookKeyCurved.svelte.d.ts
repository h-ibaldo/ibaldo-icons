import { SvelteComponent } from 'svelte';

export interface BookKeyCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookKeyCurved extends SvelteComponent<BookKeyCurvedProps> {}
