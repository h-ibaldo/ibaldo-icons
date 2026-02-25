import { SvelteComponent } from 'svelte';

export interface Bookmark1Heart1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Heart1 extends SvelteComponent<Bookmark1Heart1Props> {}
