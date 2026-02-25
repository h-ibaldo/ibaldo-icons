import { SvelteComponent } from 'svelte';

export interface Bookmark1Star3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Star3 extends SvelteComponent<Bookmark1Star3Props> {}
