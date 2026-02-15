import { SvelteComponent } from 'svelte';

export interface Bookmark1Check1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Check1 extends SvelteComponent<Bookmark1Check1Props> {}
