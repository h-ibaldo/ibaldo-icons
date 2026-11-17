import { SvelteComponent } from 'svelte';

export interface BookInformation1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInformation1 extends SvelteComponent<BookInformation1Props> {}
