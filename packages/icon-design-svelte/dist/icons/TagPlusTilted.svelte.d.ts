import { SvelteComponent } from 'svelte';

export interface TagPlusTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TagPlusTilted extends SvelteComponent<TagPlusTiltedProps> {}
