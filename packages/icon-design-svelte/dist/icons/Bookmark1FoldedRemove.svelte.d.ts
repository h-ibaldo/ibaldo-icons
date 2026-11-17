import { SvelteComponent } from 'svelte';

export interface Bookmark1FoldedRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1FoldedRemove extends SvelteComponent<Bookmark1FoldedRemoveProps> {}
