import { SvelteComponent } from 'svelte';

export interface Bookmark1Heart2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Heart2 extends SvelteComponent<Bookmark1Heart2Props> {}
