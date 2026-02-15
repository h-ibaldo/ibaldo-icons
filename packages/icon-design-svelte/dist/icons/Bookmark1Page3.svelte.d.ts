import { SvelteComponent } from 'svelte';

export interface Bookmark1Page3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Page3 extends SvelteComponent<Bookmark1Page3Props> {}
