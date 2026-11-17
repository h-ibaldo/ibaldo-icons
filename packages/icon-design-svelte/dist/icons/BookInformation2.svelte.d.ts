import { SvelteComponent } from 'svelte';

export interface BookInformation2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInformation2 extends SvelteComponent<BookInformation2Props> {}
