import { SvelteComponent } from 'svelte';

export interface BookArrowDownCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowDownCurved extends SvelteComponent<BookArrowDownCurvedProps> {}
