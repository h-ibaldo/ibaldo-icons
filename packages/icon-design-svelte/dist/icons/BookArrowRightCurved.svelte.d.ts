import { SvelteComponent } from 'svelte';

export interface BookArrowRightCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookArrowRightCurved extends SvelteComponent<BookArrowRightCurvedProps> {}
