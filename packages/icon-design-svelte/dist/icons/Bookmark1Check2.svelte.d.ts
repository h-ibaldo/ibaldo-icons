import { SvelteComponent } from 'svelte';

export interface Bookmark1Check2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Check2 extends SvelteComponent<Bookmark1Check2Props> {}
