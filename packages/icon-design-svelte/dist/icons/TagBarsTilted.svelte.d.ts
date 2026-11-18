import { SvelteComponent } from 'svelte';

export interface TagBarsTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagBarsTilted extends SvelteComponent<TagBarsTiltedProps> {}
