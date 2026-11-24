import { SvelteComponent } from 'svelte';

export interface TagDotsTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagDotsTilted extends SvelteComponent<TagDotsTiltedProps> {}
