import { SvelteComponent } from 'svelte';

export interface BookInformation6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInformation6 extends SvelteComponent<BookInformation6Props> {}
