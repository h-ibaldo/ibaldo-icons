import { SvelteComponent } from 'svelte';

export interface Bookmark1FoldedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Folded extends SvelteComponent<Bookmark1FoldedProps> {}
