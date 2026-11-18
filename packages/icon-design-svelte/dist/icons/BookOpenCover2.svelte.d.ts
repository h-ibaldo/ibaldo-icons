import { SvelteComponent } from 'svelte';

export interface BookOpenCover2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BookOpenCover2 extends SvelteComponent<BookOpenCover2Props> {}
