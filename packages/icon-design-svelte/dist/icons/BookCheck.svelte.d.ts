import { SvelteComponent } from 'svelte';

export interface BookCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookCheck extends SvelteComponent<BookCheckProps> {}
