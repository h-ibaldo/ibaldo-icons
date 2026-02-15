import { SvelteComponent } from 'svelte';

export interface Bookmark1FoldedCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1FoldedCheck extends SvelteComponent<Bookmark1FoldedCheckProps> {}
