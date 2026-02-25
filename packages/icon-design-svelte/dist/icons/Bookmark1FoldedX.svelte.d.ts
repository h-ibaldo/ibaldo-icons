import { SvelteComponent } from 'svelte';

export interface Bookmark1FoldedXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1FoldedX extends SvelteComponent<Bookmark1FoldedXProps> {}
