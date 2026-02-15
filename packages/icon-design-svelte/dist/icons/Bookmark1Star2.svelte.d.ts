import { SvelteComponent } from 'svelte';

export interface Bookmark1Star2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Star2 extends SvelteComponent<Bookmark1Star2Props> {}
