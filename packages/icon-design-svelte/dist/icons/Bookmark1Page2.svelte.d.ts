import { SvelteComponent } from 'svelte';

export interface Bookmark1Page2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Page2 extends SvelteComponent<Bookmark1Page2Props> {}
