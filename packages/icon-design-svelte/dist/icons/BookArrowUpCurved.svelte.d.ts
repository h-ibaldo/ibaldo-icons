import { SvelteComponent } from 'svelte';

export interface BookArrowUpCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowUpCurved extends SvelteComponent<BookArrowUpCurvedProps> {}
