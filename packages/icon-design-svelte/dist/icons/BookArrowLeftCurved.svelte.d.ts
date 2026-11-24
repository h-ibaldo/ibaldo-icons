import { SvelteComponent } from 'svelte';

export interface BookArrowLeftCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowLeftCurved extends SvelteComponent<BookArrowLeftCurvedProps> {}
