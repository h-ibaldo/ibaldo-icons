import { SvelteComponent } from 'svelte';

export interface BookInformation5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInformation5 extends SvelteComponent<BookInformation5Props> {}
