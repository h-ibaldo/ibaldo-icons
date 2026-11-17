import { SvelteComponent } from 'svelte';

export interface BookOpenFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenFlat extends SvelteComponent<BookOpenFlatProps> {}
