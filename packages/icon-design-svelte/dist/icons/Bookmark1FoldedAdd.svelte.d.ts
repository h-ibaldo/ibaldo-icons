import { SvelteComponent } from 'svelte';

export interface Bookmark1FoldedAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1FoldedAdd extends SvelteComponent<Bookmark1FoldedAddProps> {}
