import { SvelteComponent } from 'svelte';

export interface BookSpineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookSpine extends SvelteComponent<BookSpineProps> {}
