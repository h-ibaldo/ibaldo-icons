import { SvelteComponent } from 'svelte';

export interface Bookmark3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark3 extends SvelteComponent<Bookmark3Props> {}
