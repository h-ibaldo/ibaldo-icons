import { SvelteComponent } from 'svelte';

export interface Bookmark1FoldedMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1FoldedMinus extends SvelteComponent<Bookmark1FoldedMinusProps> {}
