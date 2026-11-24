import { SvelteComponent } from 'svelte';

export interface BookLabelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookLabel extends SvelteComponent<BookLabelProps> {}
