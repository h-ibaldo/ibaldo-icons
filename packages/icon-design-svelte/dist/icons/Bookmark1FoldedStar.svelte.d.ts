import { SvelteComponent } from 'svelte';

export interface Bookmark1FoldedStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1FoldedStar extends SvelteComponent<Bookmark1FoldedStarProps> {}
