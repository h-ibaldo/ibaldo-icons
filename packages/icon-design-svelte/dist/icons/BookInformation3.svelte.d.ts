import { SvelteComponent } from 'svelte';

export interface BookInformation3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookInformation3 extends SvelteComponent<BookInformation3Props> {}
