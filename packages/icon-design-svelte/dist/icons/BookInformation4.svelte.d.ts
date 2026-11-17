import { SvelteComponent } from 'svelte';

export interface BookInformation4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInformation4 extends SvelteComponent<BookInformation4Props> {}
