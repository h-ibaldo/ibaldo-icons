import { SvelteComponent } from 'svelte';

export interface BookInformation7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInformation7 extends SvelteComponent<BookInformation7Props> {}
